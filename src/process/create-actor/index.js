/**
 * @memberof SuperduperSquad.Process
 */
class CreateActor
{
  constructor(console)
  {
    this.console = console
  }

  async onActorCreated(event)
  {
    this.console.color('cyan').log('✔ ' + event.name + ' › ' + event.data.id)
  }
}

module.exports = CreateActor
