const
  ProjectManager      = require('.'),
  LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @memberof SuperduperSquad.Domain
 */
class ProjectManagerLocator extends LocatorConstituent
{
  /**
   * @returns {ProjectManager}
   */
  locate()
  {
    const
      actor       = this.locator.locate('superduper-squad/actor'),
      eventsource = this.locator.locate('eventsource/client'),
      schema      = this.locator.locate('core/schema/composer')

    return new ProjectManager(eventsource, schema, actor)
  }
}

module.exports = ProjectManagerLocator