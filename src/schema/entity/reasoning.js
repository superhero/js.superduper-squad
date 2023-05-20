/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Reasoning
 */
const schema =
{
  'reasons':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Topic',
    'collection'  : true
  }
}

module.exports = schema