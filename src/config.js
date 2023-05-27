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
        'Superhero Tool Chain':
        {
          team:
          {
            'ba': 
            {
              team: [],
              indoctrination:
              [
                'You are a business analyst',
                'You adopt domain driven design principles'
              ],
            },
            'team-lead': 
            {
              team: [],
              indoctrination:
              [
                'You are team lead'
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
                'You are the lead architect'
              ]
            },
            'architect-api': 
            {
              team: [],
              indoctrination:
              [
                'You are the api architect'
              ]
            },
            'architect-domain': 
            {
              team: [],
              indoctrination:
              [
                'You are the domain architect'
              ]
            },
            'architect-process': 
            {
              team: [],
              indoctrination:
              [
                'You are the the process architect'
              ]
            },
            'architect-infrastructure': 
            {
              team: [],
              indoctrination:
              [
                'You are the infrastructure architect'
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
                'You are a DevOps developer'
              ]
            },
            'dev-ops-docker': 
            {
              team: [],
              indoctrination:
              [
                'You work with docker swarm'
              ]
            },
            'dev-ops-monitoring': 
            {
              team: [],
              indoctrination:
              [
                'You do monitoring'
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
                'You are a database administrator (DBA)'
              ]
            },
            'dba-writer': 
            {
              team: [],
              indoctrination:
              [
                'You optimize write operations',
                'You work with redis'
              ]
            },
            'dba-reader': 
            {
              team: [],
              indoctrination:
              [
                'You optimize read operations',
                'You work with MySql'
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
                'You are a technical writer'
              ]
            },
            'technical-writer-swaggor':
            {
              team: [],
              indoctrination:
              [
                'You work with swaggor'
              ]
            },
            'technical-writer-doctype':
            {
              team: [],
              indoctrination:
              [
                'You work with doctype'
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
                'You work as QA'
              ]
            },
            'qa-api':
            {
              team: [],
              indoctrination:
              [
                'You work as QA in the API layer'
              ]
            },
            'qa-domain':
            {
              team: [],
              indoctrination:
              [
                'You work as QA in the domain layer'
              ]
            },
            'qa-process':
            {
              team: [],
              indoctrination:
              [
                'You work as QA in the process layer'
              ]
            },
            'qa-infrastructure':
            {
              team: [],
              indoctrination:
              [
                'You work as QA in the infrastructure layer'
              ]
            },
            'qa-documentation':
            {
              team: [],
              indoctrination:
              [
                'You work as QA with documentation'
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
                {
                  reasons:
                  [
                    'Expand on the specifications provided'
                  ],
                  expert: 'ba'
                }
              ],
              alphaActorId: 'ba',
              betaActorIds: ['team-lead']
            },
            'clerifying specifications':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'Make sure that the new specifications are aligned with expectations'
                  ],
                  expert: 'ba'
                }
              ],
              alphaActorId: 'ba',
              betaActorIds: ['team-lead']
            },
            'sugested technical approach':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'sugest a technical approach'
                  ],
                  expert: 'architect-lead'
                }
              ],
              alphaActorId: 'ba',
              betaActorIds: ['team-lead', 'architect-lead']
            },
            'composed story book':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'compose a story book',
                    'each story should reflect a use case described in the specification'
                  ],
                  expert: 'team-lead'
                }
              ],
              alphaActorId: 'ba',
              betaActorIds: ['team-lead', 'architect-lead']
            },
            // distribute and perform work
            // ...
            'composed model':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'compose the interfaces of the solution'
                  ],
                  expert: 'architect-lead'
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['architect-lead']
            },
            'implemented model':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'implement a solution based on the composed interfaces'
                  ],
                  expert: 'domain-ambassador'
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['domain-ambassador']
            },
            'implemented documentation':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'implement the documentation of the solution'
                  ],
                  expert: 'technical-writer'
                }
              ],
              alphaActorId: 'team-lead',
              betaActorIds: ['technical-writer']
            },
            'composed qa report':
            {
              expectations: 
              [
                {
                  reasons:
                  [
                    'Express a QA report of the solution'
                  ],
                  expert: 'qa'
                }
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
