const
  Ai                  = require('.'),
  Request             = require('superhero/core/http/request'),
  LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @memberof SuperduperSquad.Infrastructure.Upstream
 */
class AiLocator extends LocatorConstituent
{
  /**
   * @returns {Ai}
   */
  locate()
  {
    const 
      configuration   = this.locator.locate('core/configuration'),
      object          = this.locator.locate('core/object'),
      options         = configuration.find('infrastructure/upstream/ai/gateway'),
      gateway         = new Request(options, object),
      console         = this.locator.locate('core/console')

    return new Ai(gateway, console)
  }
}

module.exports = AiLocator