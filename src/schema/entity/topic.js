/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Topic
 */
const schema =
{
  'role':
  {
    'type' : 'string',
    'enum' : 
    [
      'system',
      'assistant',
      'user',
    ]
  },
  'content':
  {
    'type'      : 'string',
    'not-empty' : true
  }
}

module.exports = schema
