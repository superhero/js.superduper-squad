/**
 * @namespace SuperduperSquad
 */
module.exports =
{
  core:
  {
    bootstrap:
    {
      'bigquery' : 'infrastructure/bigquery/bootstrap'
    },
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
        'default':
        {
          indoctronation:
          [
            {
              role    : 'system',
              message : 'You adopt domain driven design principles'
            }
          ],
          team:
          {
            'ba': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are a business analyst'
                },
              ],
            },
            'team-lead': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are team lead'
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
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are the lead architect'
                }
              ]
            },
            'architect-api': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are the api architect'
                }
              ]
            },
            'architect-domain': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are the domain architect'
                }
              ]
            },
            'architect-process': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are the the process architect'
                }
              ]
            },
            'architect-infrastructure': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are the infrastructure architect'
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
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are the domain ambassador'
                }
              ]
            },
            'backend-api': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are a node.js developer'
                }
              ]
            },
            'backend-domain': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are a node.js developer'
                }
              ]
            },
            'backend-process': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are a node.js developer'
                }
              ]
            },
            'backend-infrastructure': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are a node.js developer'
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
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are a DevOps developer'
                }
              ]
            },
            'dev-ops-docker': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You work with docker swarm'
                }
              ]
            },
            'dev-ops-monitoring': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You do monitoring'
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
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are a dba'
                }
              ]
            },
            'dba-writer': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You optimize write operations'
                },
                {
                  role    : 'system',
                  message : 'You work with redis'
                }
              ]
            },
            'dba-reader': 
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You optimize read operations'
                },
                {
                  role    : 'system',
                  message : 'You work with MySql'
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
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You are a technical writer'
                }
              ]
            },
            'technical-writer-swaggor':
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You work with swaggor'
                }
              ]
            },
            'technical-writer-doctype':
            {
              team: [],
              indoctronation:
              [
                {
                  role    : 'system',
                  message : 'You work with doctype'
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
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            'clerifying specifications':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            'sugested technical approach':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            'refine specifications':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            'composed story book':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            'refine story book':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            // distribute and perform work
            // ...
            'composed model':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            'implemented model':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            'documented implementation':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
            },
            'composed qa report':
            {
              expectations: [],
              alphaActorId: '',
              betaActorIds: []
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
            'Authorization' : `Bearer ???`,
            'Content-Type'  : 'application/json'
          }
        }
      }
    }
  }
}
