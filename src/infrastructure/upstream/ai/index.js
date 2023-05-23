/**
 * @memberof SuperduperSquad.Infrastructure.Upstream
 */
class Ai
{
  constructor(gateway, console)
  {
    this.gateway = gateway
    this.console = console
  }

  /**
   * 
   * @param {array<SuperduperSquad.Schema.Entity.Topic>} topics 
   */
  async conclude(messages)
  {
    const
      url  = 'https://api.openai.com/v1/engines/davinci-codex/completions',
      data = 
      {
        // the input...
        messages,

        // Sets a maximum limit to the length of the generated text
        max_tokens : 100,

        // Influences the randomness of the model's responses
        // A high temperature (close to 1) results in more random outputs, while a lower temperature (close to 0) makes the output more deterministic and focused
        temperature : 0.2,

        // when top_p is set to 1, the model considers all tokens, but when top_p is set to, say, 0.5, it only considers the most probable tokens
        top_p : 0.5,

        // This parameter discourages the model from choosing tokens that it uses frequently. 
        // A higher frequency_penalty means the model is more likely to avoid commonly used tokens in its responses.
        frequency_penalty : 0,

        // This parameter encourages the model to use new tokens that it hasn't used before. 
        // A higher presence_penalty encourages the model to be more creative and diverse in its choice of tokens.
        presence_penalty: 0
      },
      result = await this.gateway.post({ url, headers, data })

    if(result.status === 200)
    {
      this.console.log('...ai result', result)
      return result.data.choices[0].message.content
    }
    else
    {
      const error = new Error('unexpected status')
      error.chain = { url, data, result }
      error.code  = 'E_SQUAD_UPSTREAM_AI'
      throw error
    }
  }
}

module.exports = Ai
