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
      console     = this.locator.locate('core/console'),
      schema      = this.locator.locate('core/schema/composer')

    return new Actor(ai, schema, eventsource, console)
  }
}

module.exports = ActorLocator