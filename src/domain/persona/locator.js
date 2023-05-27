const
  Persona             = require('.'),
  LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @memberof SuperduperSquad.Domain
 */
class PersonaLocator extends LocatorConstituent
{
  /**
   * @returns {Persona}
   */
  locate()
  {
    const
      deepclone     = this.locator.locate('core/deepclone'),
      actor         = this.locator.locate('superduper-squad/actor'),
      cli           = this.locator.locate('infrastructure/downstream/cli'),
      configuration = this.locator.locate('core/configuration'),
      playbooks     = configuration.find('domain/manager/playbooks')

    return new Persona(deepclone, actor, cli, playbooks)
  }
}

module.exports = PersonaLocator