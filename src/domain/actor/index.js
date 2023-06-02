/**
 * @memberof SuperduperSquad.Domain
 */
class Actor
{
  constructor(ai, schema, eventsource)
  {
    this.ai           = ai
    this.schema       = schema
    this.eventsource  = eventsource
  }

  /**
   * @param {string} projectId 
   * @param {SuperduperSquad.Schema.Entity.Meeting} meeting 
   * @param {string} previousConclusion 
   */
  async meet(projectId, meeting, previousConclusion)
  {
    const
      alpha         = await this.findActor(projectId, meeting.alphaActorId),
      betas         = await Promise.all(meeting.betaActorIds.map((actorId) => this.findActor(projectId, actorId))),
      conclusions   = [],
      previousTopic = composeTopic('message', previousConclusion)

    for(const expectation of meeting.expectations)
    {
      const expectationConclusions = []
      for(const beta of betas)
      {
        const conclusion = await this.discuss([...expectation, previousTopic], alpha, beta)
        expectationConclusions.push(conclusion)
      }

      const conclusion = await this.conclude(alpha, expectationConclusions)
      expectation.conclusion = conclusion
      conclusions.push(conclusion)
    }

    const conclusion = await this.conclude(alpha, conclusions)
    return conclusion
  }

  /**
   * @param {string} projectId 
   * @param {SuperduperSquad.Schema.Entity.Meeting} meeting 
   * @param {string} feedback 
   */
  async feedback(projectId, meeting, feedback)
  {
    const
      alpha           = await this.findActor(projectId, meeting.alphaActorId),
      feedbackMessage = composeTopic('message', feedback)

    for(const expectation of meeting.expectations)
    {
      const 
        conclusionAssistent = composeTopic('assistent', expectation.conclusion),
        feedbackConclusion  = await this.conclude(alpha, [ ...expectation.reasons, conclusionAssistent, feedbackMessage ])

      expectation.feedback            = feedback
      expectation.feedbackConclusion  = feedbackConclusion
    }
  }

  async findActor(projectId, actorId)
  {
    try
    {
      const 
        domain  = 'sd-squad/create-actor',
        pid     = projectId + '.' + actorId,
        state   = await this.eventsource.readState(domain, pid),
        actor   = this.schema.compose('superduper-squad/schema/entity/actor', state)

      return actor
    }
    catch(previousError)    
    {
      const error = new Error(`Actor ${actorId} not found in project ${projectId}`)
      error.chain = { previousError, projectId, actorId }
      error.code  = 'ACTOR_NOT_FOUND'
      throw error
    }
  }

  async createActor(projectId, actorId, indoctrination, team = [])
  {
    const
      domain    = 'sd-squad/create-actor', 
      pid       = projectId + '.' + actorId,
      name      = 'actor created',
      hasEvent  = await this.eventsource.hasEvent(domain, pid, name)

    if(hasEvent === false)
    {
      const data = this.schema.compose('superduper-squad/schema/entity/actor', { indoctrination, team })
      await this.eventsource.write({ domain, pid, name, data })
    }
  }

  assert(actor)
  {
    this.schema.compose('superduper-squad/schema/entity/actor', actor)
  }

  /**
   * @param {string} role 
   * @param {string} content 
   */
  composeTopic(role, content)
  {
    return this.schema.compose('superduper-squad/schema/entity/topic', { role, content })
  }

  /**
   * @param {SuperduperSquad.Schema.Entity.Reasoning} reasoning 
   * @param {SuperduperSquad.Schema.Entity.Actor}     actor
   */
  async composeQuestion(reasoning, actor)
  {
    const 
      question    = this.composeTopic('message', 'compose question'),
      topics      = [ ...reasoning.reasons, question ],
      conclusion  = await this.conclude(actor, topics)

    return conclusion
  }

  /**
   * @param {SuperduperSquad.Schema.Entity.Reasoning} reasoning 
   * @param {SuperduperSquad.Schema.Entity.Actor}     alpha
   * @param {SuperduperSquad.Schema.Entity.Actor}     beta
   */
  async discuss(reasoning, alpha, beta)
  {
    const 
      question      = await this.composeQuestion(reasoning, alpha),
      conclusion    = await this.reason(beta, question),
      alphaActorId  = alpha.id, 
      betaActorId   = beta.id, 
      discussion    = this.schema.compose('superduper-squad/schema/entity/discussion', { alphaActorId, betaActorId, reasoning:question, conclusion })

    alpha.discussions.push(discussion)
    return conclusion
  }
  
  /**
   * @param {SuperduperSquad.Schema.Entity.Actor}     alpha 
   * @param {SuperduperSquad.Schema.Entity.Reasoning} reasoning 
   */
  async reason(projectId, alpha, reasoning)
  {
    const 
      team        = await Promise.all(actor.team.map((actorId) => this.findActor(projectId, actorId))),
      conclusions = []

    for(const beta of team)
    {
      const conclusion = await this.discuss(reasoning, alpha, beta)
      conclusions.push(conclusion)
    }

    const conclusion = await this.conclude(alpha, conclusions)
    return conclusion
  }
  
  /**
   * @param {SuperduperSquad.Schema.Entity.Actor} actor 
   * @param {array<SuperduperSquad.Schema.Entity.Topic>} topics 
   */
  async conclude(actor, topics)
  {
    return await this.ai.conclude([ ...actor.indoctrination, ...topics ])
  }
  
  /**
   * @param {SuperduperSquad.Schema.Entity.Actor} actor 
   */
  act(actor)
  {
    // ... not sure here ...
  }
}

module.exports = Actor
