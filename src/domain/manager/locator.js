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
      actor       = this.locator.locate('superduper-squad/actor'),
      eventsource = this.locator.locate('eventsource/client'),
      schema      = this.locator.locate('core/schema/composer')

    return new Manager(eventsource, schema, actor)
  }
}

module.exports = ManagerLocator