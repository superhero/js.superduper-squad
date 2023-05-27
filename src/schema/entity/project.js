/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Project
 */
const schema =
{
  'id':
  {
    'type'        : 'string'
  },
  'team':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/actor',
    'collection'  : true
  },
  'meetings':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/meeting',
    'collection'  : true
  }
}

module.exports = schema