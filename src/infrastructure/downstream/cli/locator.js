const LocatorConstituent = require('superhero/core/locator/constituent')

/**
 * @memberof SuperduperSquad.Infrastructure.Downstream
 */
class CliLocator extends LocatorConstituent
{
  /**
   * @returns {Cli}
   */
  locate()
  {
    return this.locator.locate('core/cli')
  }
}

module.exports = CliLocator