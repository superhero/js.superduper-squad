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
    'schema'      : 'SuperduperSquad/Schema/Entity/Actor',
    'collection'  : true
  },
  'meetings':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Meeting',
    'collection'  : true
  }
}

module.exports = schema