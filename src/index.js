const
  CoreFactory = require('superhero/core/factory'),
  coreFactory = new CoreFactory,
  core        = coreFactory.create(process.env.BRANCH)

core.add('eventsource/client', '@superhero/core.eventsource/src/client')

core.add('superduper-squad', __dirname)

core.load(true)

core.locate('core/bootstrap').bootstrap().then(
  () => 
  {
    core.locate('core/console').log('Open AI key:', process.env.AI_TOKEN)
    core.locate('superduper-squad/manager').init()
  })
