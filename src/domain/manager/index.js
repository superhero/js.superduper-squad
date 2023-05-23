/**
 * @memberof SuperduperSquad.Domain
 */
class Manager
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

  async createActor(projectId, actorId, indoctrination, team = [])
  {
    const
      domain    = 'process/create-actor', 
      pid       = projectId + '.' + actorId,
      name      = 'actor created',
      hasEvent  = await this.eventsource.hasEvent(domain, pid, name)

    if(hasEvent)
    {
      return
    }
    else
    {
      const data = this.schema.compose('superduper-squad/schema/entity/actor', { indoctrination, team })
      await this.eventsource.write({ domain, pid, name, data })
    }
  }

  createProject(playbook, projectId)
  {
    const id = projectId || this.eventsource.mapper.toProcessId()

    for(const actorId of playbook.team)
    {
      const a = playbook.team[actorId]
      await this.createActor(id, actorId, a.indoctrination, a.team)
    }

    return this.schema.compose('superduper-squad/schema/entity/project', { ...playbook, id })
  }
  
  async startProject(project)
  {
    for(const meeting of project.meetings)
    {
      await this.actor.meet(project.id, meeting)
    }
  }
}

module.exports = Manager
