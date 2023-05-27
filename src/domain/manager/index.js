/**
 * @memberof SuperduperSquad.Domain
 */
class Manager
{
  constructor(schema, actor, persona)
  {
    this.schema   = schema
    this.actor    = actor
    this.persona  = persona
  }

  async init()
  {
    const
      playbook    = await this.persona.getPlaybook(),
      project     = await this.createProject(playbook),
      initMessage = await this.persona.init(),
      conclusion  = await this.startProject(project, initMessage)

    // action loop - actor.act()

    return conclusion
  }

  async createProject(playbook, projectId)
  {
    const id = projectId || Date.now().toString(32)

    for(const actorId of playbook.team)
    {
      const 
        playbookActor   = playbook.team[actorId],
        indoctrination  = playbookActor.indoctrination.map((content) => this.actor.composeTopic('system', content))

      await this.actor.createActor(id, actorId, indoctrination, playbookActor.team)
    }

    for(const meeting of playbook.meetings)
    {
      for(const expectation of meeting.expectations)
      {
        expectation.reasons = expectation.reasons.map((content) => this.actor.composeTopic('system', content))
      }
    }

    return this.schema.compose('superduper-squad/schema/entity/project', { ...playbook, id })
  }
  
  async startProject(project, conclusion)
  {
    for(const meeting of project.meetings)
    {
      conclusion = await this.actor.meet(project.id, meeting, conclusion)
      const feedback = await this.persona.feedback(conclusion)
      await this.actor.feedback(project.id, meeting, feedback)
    }

    return conclusion
  }
}

module.exports = Manager
