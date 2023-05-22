/**
 * @memberof SuperduperSquad.Domain
 */
class ProjectManager
{
  constructor(eventsource, schema, actor)
  {
    this.eventsource  = eventsource
    this.schema       = schema
    this.actor        = actor
  }

  async findActor(id)
  {
    const 
      event = await this.eventsource.readEventById(id),
      actor = this.schema.compose('superduper-squad/schema/entity/actor', event.data)

    return actor
  }

  async createActor(indoctronation, team = [])
  {
    const
      domain  = 'process/create-actor', 
      name    = 'actor created', 
      data    = this.schema.compose('superduper-squad/schema/entity/actor', { indoctronation, team })

    const id = await this.eventsource.write({ domain, name, data })
    return id
  }

  createProject(playbook)
  {
    return this.schema.compose('superduper-squad/schema/entity/project', playbook)
  }
  
  async startProject(project)
  {
    for(const meeting of project.meetings)
    {
      const conclusion = await this.actor.meet(meeting)
    }
  }
}

module.exports = ProjectManager
