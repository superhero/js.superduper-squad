/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Meeting
 */
const schema =
{
  'expectations':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/reasoning',
    'collection'  : true
  },
  'alphaActorId':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/actor',
    'trait'       : 'id'
  },
  'betaActorIds':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/actor',
    'trait'       : 'id',
    'collection'  : true
  }
}

module.exports = schema
