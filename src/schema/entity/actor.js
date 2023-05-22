/**
 * @memberof SuperduperSquad.Schema.Entity
 * @typedef {Object} Actor
 */
const schema =
{
  'team':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Actor',
    'trait'       : 'id',
    'collection'  : true
  },
  'indoctronation':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Topic',
    'description' : 'expected to be part of every input to the ai api, as a set of belives that chapes the decition',
    'collection'  : true
  },
  'discussions':
  {
    'type'        : 'schema',
    'schema'      : 'SuperduperSquad/Schema/Entity/Discussion',
    'description' : 'conversations that can be used as memory to improve the ability to answer and act according to expectations',
    'collection'  : true,
    'default'     : []
  }
}

module.exports = schema
