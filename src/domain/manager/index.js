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

  async findActor(projectId, actorId)
  {
    const 
      domain  = 'process/create-actor',
      pid     = projectId + '.' + actorId
      event   = await this.eventsource.readState(domain, pid),
      actor   = this.schema.compose('superduper-squad/schema/entity/actor', event.data)

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

  async createProject(playbook, projectId)
  {
    const id = projectId || this.eventsource.mapper.toProcessId()

    for(const actorId of playbook.team)
    {
      const a = playbook.team[actorId]
      await this.createActor(id, actorId, a.indoctrination, a.team)
    }

    return this.schema.compose('superduper-squad/schema/entity/project', { ...playbook, id })
  }
  
  async startProject(project, messageChain)
  {
    for(const meeting of project.meetings)
    {
      messageChain = await this.actor.meet(project.id, meeting, messageChain)
    }

    // action loop - actor.act()

    return messageChain
  }
}

module.exports = Manager
