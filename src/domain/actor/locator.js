const
  Actor               = require('.'),
  LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @memberof SuperduperSquad.Domain
 */
class ActorLocator extends LocatorConstituent
{
  /**
   * @returns {Actor}
   */
  locate()
  {
    const
      ai          = this.locator.locate('infrastructure/upstream/ai'),
      eventsource = this.locator.locate('eventsource/client'),
      schema      = this.locator.locate('core/schema/composer'),
      manager     = this.locator.locate('superduper-squad/manager')

    return new Actor(ai, schema, eventsource, manager)
  }
}

module.exports = ActorLocator