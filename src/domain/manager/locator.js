const
  Manager             = require('.'),
  LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @memberof SuperduperSquad.Domain
 */
class ManagerLocator extends LocatorConstituent
{
  /**
   * @returns {Manager}
   */
  locate()
  {
    const
      actor   = this.locator.locate('superduper-squad/actor'),
      persona = this.locator.locate('superduper-squad/persona'),
      schema  = this.locator.locate('core/schema/composer')

    return new Manager(schema, actor, persona)
  }
}

module.exports = ManagerLocator