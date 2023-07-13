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

  async getDirective(projectId)
  {
    let directive

    do
    {
      directive = await this.cli.question('provide a detailed project directive?')
    }
    while(directive.trim() === '')

    return this.actor.composeTopic('user', directive)
  }

  async getPlaybook()
  {
    const
      playbookNames = Object.keys(this.playbooks),
      question      = 'what playbook do you want to use?',
      playbook      = await this.cli.question(question, playbookNames)

    return this.deepclone.clone(this.playbooks[playbook])
  }

  async feedback(regarding, learned)
  {
    await this.cli.write('---')
    await this.cli.write('')
    await this.cli.write('Meetings where held in regards to the ' + regarding)

    for(const topic of learned)
    {
      await this.cli.write('')
      await this.cli.write(topic.content)
    }

    await this.cli.write('')
    await this.cli.write('Please provide feedback!')

    const feedback = await this.cli.question('')

    await this.cli.write('recieved feedback...')

    return feedback
  }
}

module.exports = Persona
