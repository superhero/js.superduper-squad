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
      ai            = this.locator.locate('infrastructure/upstream/ai'),
      eventsource   = this.locator.locate('eventsource/client'),
      schema        = this.locator.locate('core/schema/composer'),
      manager       = this.locator.locate('superduper-squad/manager'),
      cli           = this.locator.locate('infrastructure/downstream/cli'),
      configuration = this.locator.locate('core/configuration'),
      playbooks     = configuration.find('domain/manager/playbooks')

    return new Manager(ai, schema, eventsource, manager, cli, playbooks)
  }
}

module.exports = ManagerLocator