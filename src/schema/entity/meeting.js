/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Meeting
 */
const schema =
{
  'expectations':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Reasoning',
    'collection'  : true
  },
  'alphaActorId':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Actor',
    'trait'       : 'id'
  },
  'betaActorIds':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Actor',
    'trait'       : 'id',
    'collection'  : true
  }
}

module.exports = schema
