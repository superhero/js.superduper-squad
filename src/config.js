const { regarding } = require("./schema/entity/expectation");

/**
 * @namespace SuperduperSquad
 */
module.exports =
{
  core:
  {
    locator:
    {
      'superduper-squad/*'          : __dirname + '/domain/*',
      'sd-squad/*'                  : __dirname + '/process/*',
      'infrastructure/downstream/*' : __dirname + '/infrastructure/downstream/*',
      'infrastructure/upstream/*'   : __dirname + '/infrastructure/upstream/*'
    },
    schema:
    {
      composer:
      {
        'superduper-squad/schema/entity/*'  : __dirname + '/schema/entity/*'
      }
    }
  },
  domain:
  {
    manager:
    {
      playbooks:
      {
        'Superhero Tool Chain':
        {
          team:
          {
            'persona': 
            {
              team: [],
              indoctrination:
              [
                'You adopt domain driven design principles'
              ],
            },
            'team-lead': 
            {
              team: [],
              indoctrination:
              [
                'You adopt domain driven design principles',
                'You are team lead'
              ],
            },
            'architect': 
            {
              team: [],
              indoctrination:
              [
                'You are a software architect',
                'You adopt domain driven design principles',
              ]
            },
            // ...
            'domain-ambassador': 
            {
              team: 
              [
                'backend-api',
                'backend-domain',
                'backend-process',
                'backend-infrastructure',
                'dev-ops'
              ],
              indoctrination:
              [
                'You adopt domain driven design principles',
                'You are the domain ambassador'
              ]
            },
            'backend-api': 
            {
              team: [],
              indoctrination:
              [
                'You are a node.js developer'
              ]
            },
            'backend-domain': 
            {
              team: [],
              indoctrination:
              [
                'You are a node.js developer'
              ]
            },
            'backend-process': 
            {
              team: [],
              indoctrination:
              [
                'You are a node.js developer'
              ]
            },
            'backend-infrastructure': 
            {
              team: [],
              indoctrination:
              [
                'You are a node.js developer'
              ]
            },
            'dev-ops': 
            {
              team: [],
              indoctrination:
              [
                'You are the dev-ops',
                'You write Dockerfiles for a living',
              ]
            },
            'technical-writer': 
            {
              team: [],
              indoctrination:
              [
                'You adopt domain driven design principles',
                'You are a technical writer'
              ]
            },
            'qa':
            {
              team: [],
              indoctrination:
              [
                'You work as QA'
              ]
            }
          },
          meetings:
          {
            // ...
            'specifications':
            {
              expectations:
              [
                {
                  reasons:
                  [
                    'compose specifications for the project. each specification should be defined by different use cases; that describes the functionality of the specification'
                  ]
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['architect']
            },
            'technical-approach':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'suggest a technical approach to the previously defined specifications'
                  ]
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['architect']
            },
            'story-book':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'compose a story book. each story should reflect different use cases described by the specifications, correlated with the technical approach'
                  ]
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['architect']
            },
            'testplan':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'each test case should have an expected result, that reflects the use case described by the story book. express a testplan based on the story book. the testplan should be composed from different test cases, that reflect the use cases described by the story book'
                  ]
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['qa']
            },
            // distribute and perform work
            // ...
            'implementation':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'write code for the solution that fullfills the use cases expressed in the testplan, based on the story book and the previously described technical approach and specifications'
                  ]
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['domain-ambassador']
            },
            'documentation':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'write documentation to the solution based on the specifications, story book and technical approach'
                  ]
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['technical-writer']
            }
          }
        }
      }
    }
  },
  infrastructure:
  {
    upstream:
    {
      ai:
      {
        gateway:
        {
          headers:
          {
            'Authorization' : `Bearer ` + process.env.AI_TOKEN,
            'Content-Type'  : 'application/json'
          },
          url: 'https://api.openai.com/'
        }
      }
    }
  },
  client:
  {
    eventsource:
    {
      domain  : 'sd-squad/*',
      name    : '*',
      gateway :
      {
        url: `redis://` + process.env.REDIS_URL
      }
    }
  }
}