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

  async getPlaybook()
  {
    const
      playbookNames = Object.keys(this.playbooks),
      question      = await this.composeQuestion('what playbook do you want to use?'),
      playbook      = await this.cli.question(question, playbookNames)

    return this.deepclone.clone(this.playbooks[playbook])
  }

  /**
   * @param {string} message 
   * @returns {string} 
   */
  async composeQuestion(message)
  {
    const
      actor     = this.actor.findActor('persona'),
      topic     = this.actor.composeTopic('message', message),
      reasoning = { reasons:[ topic ] },
      question  = await this.actor.composeQuestion(reasoning, actor)
    
    return question
  }

  /**
   * @param {SuperduperSquad.Schema.Entity.Reasoning} reasoning 
   */
  async feedback(conclusion)
  {
    const
      question  = await this.composeQuestion(conclusion),
      answer    = await this.cli(question)

    return answer
  }
}

module.exports = Persona
