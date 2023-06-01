/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Actor
 */
const schema =
{
  'id':
  {
    'type'        : 'string',
    'description' : 'unique identifier for the actor',
    'not-empty'   : true,
    'optional'    : true
  },
  'team':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/actor',
    'trait'       : 'id',
    'collection'  : true
  },
  'indoctrination':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/topic',
    'description' : 'expected to be part of every input to the ai api, as a set of belives that chapes the decition',
    'collection'  : true
  },
  'discussions':
  {
    'type'        : 'schema',
    'schema'      : 'superduper-squad/schema/entity/discussion',
    'description' : 'conversations that can be used as memory to improve the ability to answer and act according to expectations',
    'collection'  : true,
    'default'     : []
  }
}

module.exports = schema
