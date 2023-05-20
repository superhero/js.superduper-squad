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
      'assistent',
      'system',
      'message'
    ]
  },
  'content':
  {
    'type'      : 'string',
    'not-empty' : true
  }
}

module.exports = schema
