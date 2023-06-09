/**
 * @memberof SuperduperSquad.Domain
 */
class Actor
{
  constructor(ai, schema, eventsource, console)
  {
    this.ai           = ai
    this.schema       = schema
    this.eventsource  = eventsource
    this.console      = console
  }

  /**
   * @param {string} projectId 
   * @param {SuperduperSquad.Schema.Entity.Meeting} meeting 
   * @param {SuperduperSquad.Schema.Entity.Reasoning} reasoning
   */
  async meet(projectId, meeting, reasoning)
  {
    console.log('thinking...')

    const
      alpha = await this.findActor(projectId, meeting.alphaActorId),
      betas = await Promise.all(meeting.betaActorIds.map((actorId) => this.findActor(projectId, actorId)))

    for(const expectation of meeting.expectations)
    {
      const expectationConclusionTopics = []

      for(const beta of betas)
      {
        const
          conclusion  = await this.discuss(projectId, [ ...reasoning.reasons, ...expectation.reasons ], alpha, beta),
          topic       = this.composeTopic('assistant', conclusion)
        
        expectationConclusionTopics.push(topic)
      }

      const
        concludeTopic = this.composeTopic('user', 'respond without introduction and conclusion'), // prologue or epilogue
        conclusion    = await this.conclude(alpha, [ ...reasoning.reasons, ...expectation.reasons, ...expectationConclusionTopics, concludeTopic, ...expectation.reasons ])

      expectation.conclusion = this.composeTopic('assistant', conclusion)
    }
  }

  /**
   * @param {string}                                      projectId 
   * @param {array<SuperduperSquad.Schema.Entity.Topic>}  reasons 
   * @param {SuperduperSquad.Schema.Entity.Actor}         alpha
   * @param {SuperduperSquad.Schema.Entity.Actor}         beta
   */
  async discuss(projectId, reasons, alpha, beta)
  {
    const 
      conclusion    = await this.reason(projectId, beta, reasons),
      alphaActorId  = alpha.id, 
      betaActorId   = beta.id,
      discussion    = this.schema.compose('superduper-squad/schema/entity/discussion', { alphaActorId, betaActorId, reasons, conclusion })

    alpha.discussions.push(discussion)
    return conclusion
  }

  async findActor(projectId, actorId)
  {
    try
    {
      const 
        domain  = 'sd-squad/create-actor',
        pid     = projectId + '.' + actorId,
        state   = await this.eventsource.readState(domain, pid),
        actor   = this.schema.compose('superduper-squad/schema/entity/actor', { ...state, id:actorId })

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
      const data = this.schema.compose('superduper-squad/schema/entity/actor', { id:actorId, indoctrination, team })
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
   * @param {array<SuperduperSquad.Schema.Entity.Topic>}  reasons 
   * @param {SuperduperSquad.Schema.Entity.Actor}         actor
   */
  async composeQuestion(reasons, actor)
  {
    const conclusion = await this.conclude(actor, reasons)
    return conclusion
  }
  
  /**
   * @param {string}                                      projectId 
   * @param {SuperduperSquad.Schema.Entity.Actor}         alpha 
   * @param {array<SuperduperSquad.Schema.Entity.Topic>}  reasons 
   */
  async reason(projectId, alpha, reasons)
  {
    console.log('reasoning...')

    const 
      team        = await Promise.all(alpha.team.map((actorId) => this.findActor(projectId, actorId))),
      conclusions = []

    for(const beta of team)
    {
      const 
        conclusion = await this.discuss(projectId, reasons, alpha, beta),
        topic      = this.composeTopic('assistant', conclusion)

      conclusions.push(topic)
    }

    const conclusion = await this.conclude(alpha, [ ...reasons, ...conclusions ])
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
