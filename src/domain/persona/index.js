const Actor = require('../actor')

/**
 * @memberof SuperduperSquad.Domain
 */
class Persona extends Actor
{
  constructor(ai, schema, eventsource, manager, cli, playbooks)
  {
    this.super(ai, schema, eventsource, manager)

    this.cli        = cli
    this.playbooks  = playbooks
  }

  async whatDoYouWant()
  {
    const 
      iWant           = await this.cli.question('What do you want?'),
      project         = this.manager.createProject(this.playbooks['superhero-tool-chain']),
      thatsWhatYouGet = await this.manager.startProject(project, iWant)

    return thatsWhatYouGet
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
