/**
 * @namespace SuperduperSquad
 */
module.exports =
{
  core:
  {
    bootstrap:
    {
      'bigquery' : 'infrastructure/bigquery/bootstrap'
    },
    locator:
    {
      'superduper-squad/*'          : __dirname + '/domain/*',
      'infrastructure/downstream/*' : __dirname + '/infrastructure/downstream/*',
      'infrastructure/upstream/*'   : __dirname + '/infrastructure/upstream/*'
    },
    schema:
    {
      composer:
      {
        'eventsource-superduper/schema/entity/*'  : __dirname + '/schema/entity/*'
      }
    }
  },
  infrastructure:
  {
    upstream:
    {
      ai:
      {
        gateway:
        {
          headers:
          {
            'Authorization' : `Bearer ???`,
            'Content-Type'  : 'application/json'
          }
        }
      }
    }
  }
}
