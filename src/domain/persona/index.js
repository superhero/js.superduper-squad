/**
 * @memberof SuperduperSquad.Domain
 */
class Persona
{
  constructor(deepclone, actor, cli, playbooks)
  {
    this.deepclone  = deepclone
    this.actor      = actor
    this.cli        = cli
    this.playbooks  = playbooks
  }

  async init(projectId)
  {
    let answer
    do
    {
      answer = await this.cli.question('what can I help you with?')
    }
    while(answer.trim() === '')
    return answer
  }

  async getPlaybook()
  {
    const
      playbookNames = Object.keys(this.playbooks),
      question      = 'what playbook do you want to use?',
      playbook      = await this.cli.question(question, playbookNames)

    return this.deepclone.clone(this.playbooks[playbook])
  }

  /**
   * @param {string} message 
   * @returns {string} 
   */
  async composeQuestion(projectId, message)
  {
    const
      actor     = await this.actor.findActor(projectId, 'persona'),
      topic     = await this.actor.composeTopic('user', message),
      reasoning = { reasons:[ topic ] },
      question  = await this.actor.composeQuestion(reasoning.reasons, actor)
    
    return question
  }

  /**
   * @param {SuperduperSquad.Schema.Entity.Reasoning} reasoning 
   */
  async feedback(projectId, conclusion)
  {
    const
      question  = await this.composeQuestion(projectId, conclusion),
      answer    = await this.cli.question(question)

    return answer
  }
}

module.exports = Persona
