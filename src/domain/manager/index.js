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
      initMessage = await this.persona.init(project.id),
      conclusion  = await this.startProject(project, initMessage)

    // action loop - actor.act()

    return conclusion
  }

  async createProject(playbook, projectId)
  {
    const
      id       = projectId || Date.now().toString(32),
      team     = [],
      meetings = []

    for(const actorId in playbook.team)
    {
      const
        playbookActor   = playbook.team[actorId],
        indoctrination  = playbookActor.indoctrination.map((content) => this.actor.composeTopic('system', content))

      playbookActor.indoctrination = indoctrination

      await this.actor.createActor(id, actorId, indoctrination, playbookActor.team)
      const actor = { id:actorId, indoctrination, team:playbookActor.team }
      this.actor.assert(actor)
      team.push(actor)
    }

    for(const meetingId in playbook.meetings)
    {
      const meeting = playbook.meetings[meetingId]
      for(const expectation of meeting.expectations)
      {
        expectation.reasons = expectation.reasons.map((content) => this.actor.composeTopic('system', content))
      }
      meetings.push(meeting)
    }

    return this.schema.compose('superduper-squad/schema/entity/project', { team, meetings, id })
  }
  
  async startProject(project, conclusion)
  {
    for(const meeting of project.meetings)
    {
      console.log('project id:', project.id)
      console.log('meeting:', meeting)

      conclusion = await this.actor.meet(project.id, meeting, conclusion)

      console.log('conclusion:', conclusion)

      throw new Error('TODO: chill a bit...')

      const feedback = await this.persona.feedback(conclusion)
      await this.actor.feedback(project.id, meeting, feedback)
    }

    return conclusion
  }
}

module.exports = Manager
