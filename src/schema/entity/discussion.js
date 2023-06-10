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
  'reasons':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/reasoning',
    'trait'       : 'reasons'
  },
  'conclusion':
  {
    'type'        : 'string'
  }
}

module.exports = schema