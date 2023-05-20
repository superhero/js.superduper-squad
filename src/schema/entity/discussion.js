/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Discussion
 */
const schema =
{
  'alphaActorId':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Actor',
    'trait'       : 'id',
  },
  'betaActorId':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Actor',
    'trait'       : 'id',
  },
  'reasoning':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Reasoning',
    'trait'       : 'reasons',
    'collection'  : true
  },
  'conclusion':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Topic',
  }
}

module.exports = schema