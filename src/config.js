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
            'product-owner':
            {
              indoctrination:
              [
                'You are the product owner',
                'A user story is a simple description of a feature as seen by the end-user',
                'Write user stories like this: "As a [type of user], I want [an action] so that [a benefit]".'
              ]
            },
            'team-lead': 
            {
              indoctrination:
              [
                'You are team lead',
                'Write specifications like this: "Given [some context] When [some event] Then [some outcome]".',
              ]
            },
            'architect': 
            {
              indoctrination:
              [
                'You are a software architect',
                'You adopt domain driven design principles',
                'You belive in a stupid frontend, less logic in the frontend is a better frontend',
                'You work with node.js in the backend',
                'You work with the Superhero Core framework, where the more popular choice is express.js',
                'You do not want to work with other dependecies than what is offered by the Superhero Tool Chain',
                'If it\'s necessery with dependencies, you prefer to use the most stable and mature ones, but they must be focused on solving a specific responsibility',
                'You work with redis streams as a message broker',
                'You work with microservice architecture in a docker swarm envirement'
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
              indoctrination:
              [
                'You are a node.js developer'
              ]
            },
            'backend-domain': 
            {
              indoctrination:
              [
                'You are a node.js developer'
              ]
            },
            'backend-process': 
            {
              indoctrination:
              [
                'You are a node.js developer'
              ]
            },
            'backend-infrastructure': 
            {
              indoctrination:
              [
                'You are a node.js developer'
              ]
            },
            'dev-ops': 
            {
              indoctrination:
              [
                'You are the dev-ops',
                'You write Dockerfiles for a living',
              ]
            },
            'technical-writer': 
            {
              indoctrination:
              [
                'You adopt domain driven design principles',
                'You are a technical writer'
              ]
            },
            'qa':
            {
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
                    'compose specifications for the project' // . each specification should be defined by different use cases; that describes the functionality of the specification
                  ]
                }
              ],
              alphaActorId: 'team-lead'
            },
            'technical-approach':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'suggest the technical stack to the solution based on the previously defined specifications'
                  ]
                }
              ],
              alphaActorId: 'architect'
            },
            'story-book':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'compose user stories that reflects the different use cases described by the specifications, correlated with the technical approach'
                  ]
                }
              ],
              alphaActorId: 'product-owner'
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
              alphaActorId: 'qa'
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