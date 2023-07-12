const
  CoreFactory = require('superhero/core/factory'),
  coreFactory = new CoreFactory,
  core        = coreFactory.create(process.env.BRANCH)

core.add('eventsource/client', '@superhero/core.eventsource/src/client')

core.add('superduper-squad', __dirname + '/..');

(async () => 
{
  try
  {
    await core.locate('core/bootstrap').bootstrap()
  }
  catch(previousError)
  {
    core.locate('core/console').color('red').log(previousError)
    throw previousError
  }

  const ai = core.locate('infrastructure/upstream/ai')

  const messages =
  [
    {
      role    : 'user',
      content : 'tell me about the number 42'
    }
  ]
  const conclusion = await ai.conclude(messages, { model:'gpt-3.5-turbo', max_tokens:16000, temperature:0.9, top_p:.5, frequency_penalty:0, presence_penalty:0 })
  console.log('conclusion', conclusion)
})()
