/**
 * @memberof SuperduperSquad.Domain
 */
class Manager
{
  constructor(schema, actor, persona, console)
  {
    this.schema   = schema
    this.actor    = actor
    this.persona  = persona
    this.console  = console
  }

  async init()
  {
    const
      playbook    = await this.persona.getPlaybook(),
      project     = await this.createProject(playbook),
      directive   = await this.persona.getDirective(project.id),
      conclusion  = await this.startProject(project, directive)

    // action loop - actor.act()

    return conclusion
  }

  /**
   * @param {object} playbook
   * @param {string} projectId
   */
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
        expectation.reasons   = expectation.reasons.map((content) => this.actor.composeTopic('user', content))
        expectation.regarding = expectation.regarding || meetingId
      }
      meetings.push(meeting)
    }

    const project = this.schema.compose('superduper-squad/schema/entity/project', { team, meetings, id })

    return project
  }
  
  /**
   * @param {SuperduperSquad.Schema.Entity.Project} project 
   * @param {SuperduperSquad.Schema.Entity.Topic} directive 
   * @returns 
   */
  async startProject(project, directive)
  {
    project.reasoning = this.schema.compose('superduper-squad/schema/entity/reasoning', { reasons:[ directive ]})

    for(const meeting of project.meetings)
    {
      const alpha = await this.actor.findActor(project.id, meeting.alphaActorId)

      await this.actor.meet(project.id, meeting, project.reasoning)

      for(const expectation of meeting.expectations)
      {
        const 
          learned             = [ ...expectation.reasons, expectation.conclusion ],
          feedback            = await this.persona.feedback(expectation.regarding, learned),
          feedbackTopic       = this.actor.composeTopic('user', feedback + '\n\n' + '(repeat your last message if everything was fine)'),
          feedbackConclusion  = await this.actor.conclude(alpha, [ ...learned, feedbackTopic ]),
          feedbackAssistant   = this.actor.composeTopic('assistant', feedbackConclusion)

        expectation.feedback            = feedback
        expectation.feedbackConclusion  = feedbackConclusion

        project.reasoning.reasons.push(feedbackAssistant)
      }
    }
  }
}

module.exports = Manager
