/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Reasoning
 */
const schema =
{
  '@meta':
  {
    'extends'     : 'superduper-squad/schema/entity/reasoning',
  },
  'expert':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/actor',
    'trait'       : 'id',
    'description' : 'the id of the actor that is considered the expert of the expectation'
  },
  'conclusion':
  {
    'type'        : 'string',
    'optional'    : true
  },
  'feedback':
  {
    'type'        : 'string',
    'optional'    : true
  },
  'feedbackConclusion':
  {
    'type'        : 'string',
    'optional'    : true
  }
}

module.exports = schema
