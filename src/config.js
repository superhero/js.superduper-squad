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
      'infrastructure/downstream/*' : __dirname + '/infrastructure/downstream/*',
      'infrastructure/upstream/*'   : __dirname + '/infrastructure/upstream/*'
    },
    schema:
    {
      composer:
      {
        'eventsource-superduper/schema/entity/*'  : __dirname + '/schema/entity/*'
      }
    }
  },
  domain:
  {
    manager:
    {
      playbooks:
      {
        'superhero-tool-chain':
        {
          team:
          {
            'ba': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are a business analyst'
                },
                {
                  role    : 'system',
                  content : 'You adopt domain driven design principles'
                }
              ],
            },
            'team-lead': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are team lead'
                }
              ],
            },
            'architect-lead': 
            {
              team: 
              [
                'architect-api',
                'architect-domain',
                'architect-process',
                'architect-infrastructure'
              ],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are the lead architect'
                }
              ]
            },
            'architect-api': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are the api architect'
                }
              ]
            },
            'architect-domain': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are the domain architect'
                }
              ]
            },
            'architect-process': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are the the process architect'
                }
              ]
            },
            'architect-infrastructure': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are the infrastructure architect'
                }
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
                'dev-ops',
                'dba',
              ],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are the domain ambassador'
                }
              ]
            },
            'backend-api': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are a node.js developer'
                }
              ]
            },
            'backend-domain': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are a node.js developer'
                }
              ]
            },
            'backend-process': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are a node.js developer'
                }
              ]
            },
            'backend-infrastructure': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are a node.js developer'
                }
              ]
            },
            // dev-ops...
            'dev-ops': 
            {
              team: 
              [
                'dev-ops-docker',
                'dev-ops-monitoring'
              ],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are a DevOps developer'
                }
              ]
            },
            'dev-ops-docker': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work with docker swarm'
                }
              ]
            },
            'dev-ops-monitoring': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You do monitoring'
                }
              ]
            },
            // dba...
            'dba': 
            {
              team: 
              [
                'dba-writer',
                'dba-reader'
              ],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are a dba'
                }
              ]
            },
            'dba-writer': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You optimize write operations'
                },
                {
                  role    : 'system',
                  content : 'You work with redis'
                }
              ]
            },
            'dba-reader': 
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You optimize read operations'
                },
                {
                  role    : 'system',
                  content : 'You work with MySql'
                }
              ]
            },
            'technical-writer': 
            {
              team: 
              [
                'technical-writer-swaggor',
                'technical-writer-doctype',
              ],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You are a technical writer'
                }
              ]
            },
            'technical-writer-swaggor':
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work with swaggor'
                }
              ]
            },
            'technical-writer-doctype':
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work with doctype'
                }
              ]
            },
            'qa':
            {
              team: 
              [
                'qa-api',
                'qa-domain',
                'qa-process',
                'qa-infrastructure',
                'qa-documentation'
              ],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work as QA'
                }
              ]
            },
            'qa-api':
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work as QA in the API layer'
                }
              ]
            },
            'qa-domain':
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work as QA in the domain layer'
                }
              ]
            },
            'qa-process':
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work as QA in the process layer'
                }
              ]
            },
            'qa-infrastructure':
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work as QA in the infrastructure layer'
                }
              ]
            },
            'qa-documentation':
            {
              team: [],
              indoctrination:
              [
                {
                  role    : 'system',
                  content : 'You work as QA with documentation'
                }
              ]
            },
          },
          meetings:
          {
            // gather project specification
            // ...
            'expanding specifications':
            {
              expectations:
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'Expand on the specifications provided'
                  }
                ]
              ],
              alphaActorId: 'ba',
              betaActorIds: ['team-lead']
            },
            'clerifying specifications':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'Make sure that the new specifications are aligned with expectations'
                  }
                ]
              ],
              alphaActorId: 'ba',
              betaActorIds: ['persona']
            },
            'sugested technical approach':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'sugest a technical approach'
                  }
                ]
              ],
              alphaActorId: 'ba',
              betaActorIds: ['team-lead', 'architect-lead']
            },
            'refine specifications':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'Make sure that the sugested technical approach is aligned with expectations'
                  }
                ]
              ],
              alphaActorId: 'ba',
              betaActorIds: ['persona']
            },
            'composed story book':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'compose a story book'
                  },
                  {
                    'role'    : 'message',
                    'content' : 'each story should reflect a use case described in the specification'
                  }
                ]
              ],
              alphaActorId: 'ba',
              betaActorIds: ['team-lead', 'architect-lead']
            },
            'refine story book':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'Make sure that the sugested storybook is aligned with expectations'
                  }
                ]
              ],
              alphaActorId: 'ba',
              betaActorIds: ['persona']
            },
            // distribute and perform work
            // ...
            'composed model':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'Compose the interfaces of the solution'
                  }
                ]
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['architect-lead']
            },
            'implemented model':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'Implement a solution based on the composed interfaces'
                  }
                ]
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['domain-ambassador']
            },
            'implemented documentation':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'Implement the documentation of the solution'
                  }
                ]
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['technical-writer']
            },
            'composed qa report':
            {
              expectations: 
              [
                [
                  {
                    'role'    : 'message',
                    'content' : 'Express a QA report of the solution'
                  }
                ]
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['qa']
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
            'Authorization' : `Bearer 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`,
            'Content-Type'  : 'application/json'
          }
        }
      }
    }
  }
}
