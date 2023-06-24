const 
  CreateActor         = require('.'),
  LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @memberof SuperduperSquad.Infrastructure.Process
 */
class CreateActorLocator extends LocatorConstituent
{
  /**
   * @returns {CreateActor}
   */
  locate()
  {
    const console = this.locator.locate('core/console')
    return new CreateActor(console)
  }
}

module.exports = CreateActorLocator
