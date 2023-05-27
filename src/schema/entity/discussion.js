/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Discussion
 */
const schema =
{
  'alphaActorId':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/actor',
    'trait'       : 'id',
  },
  'betaActorId':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/actor',
    'trait'       : 'id',
  },
  'reasoning':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/reasoning',
    'trait'       : 'reasons',
    'collection'  : true
  },
  'conclusion':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/topic',
  }
}

module.exports = schema