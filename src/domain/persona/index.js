const Actor = require('../actor')

/**
 * @memberof SuperduperSquad.Domain
 */
class Persona extends Actor
{
  constructor(ai, schema, eventsource, manager, cli)
  {
    this.super(ai, schema, eventsource, manager)
    this.cli = cli
  }
  
  /**
   * @param {SuperduperSquad.Schema.Entity.Actor}     alpha 
   * @param {SuperduperSquad.Schema.Entity.Reasoning} reasoning 
   */
  async reason(alpha, reasoning)
  {
    const 
      conclusion  = await super.reason(alpha, reasoning),
      topic       = this.composeTopic('message', conclusion)

    reasoning.reasons.push(topic)

    const
      question   = await this.composeQuestion(reasoning, actor),
      answer     = await this.cli(question)

    return answer
  }
}

module.exports = Persona
