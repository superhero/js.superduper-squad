/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Reasoning
 */
const schema =
{
  '@meta':
  {
    'extends'     : 'superduper-squad/schema/entity/reasoning',
    'immutable'   : false
  },
  'regarding':
  {
    'type'        : 'string'
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
