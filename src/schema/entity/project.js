/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Project
 */
const schema =
{
  'meetings':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Meeting',
    'collection'  : true
  }
}

module.exports = schema