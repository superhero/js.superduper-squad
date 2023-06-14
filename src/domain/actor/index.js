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
    console.log('meet... ')

    const
      alpha             = await this.findActor(projectId, meeting.alphaActorId),
      betas             = await Promise.all(meeting.betaActorIds.map((actorId) => this.findActor(projectId, actorId))),
      previousTopic     = this.composeTopic('user', previousConclusion),
      conclusionTopics  = [ previousTopic ]

    for(const expectation of meeting.expectations)
    {
      console.log('meet... expectation... ')
      const expectationConclusionTopics = []

      for(const beta of betas)
      {
        console.log('meet... expectation... discuss with beta...')

        const
          conclusion  = await this.discuss(projectId, [ previousTopic, ...expectation.reasons ], alpha, beta),
          topic       = this.composeTopic('assistant', conclusion)
        
        expectationConclusionTopics.push(topic)
      }

      conclusionTopics.push(...expectation.reasons)

      console.log('meet... expectation... conclude by alpha...')

      const
        concludeTopic = this.composeTopic('user', 'provide answers without introductions or epilogue'),
        conclusion    = await this.conclude(alpha, [ ...conclusionTopics, ...expectationConclusionTopics, concludeTopic, ...expectation.reasons ]),
        topic         = this.composeTopic('assistant', conclusion)

      expectation.conclusion = conclusion
      conclusionTopics.push(topic)
    }

    // TODO... shall we conclude these messages by concatenating the strings, or by asking the AI to conclude everything, including the expectations...
    // currently we get the errror that "As an AI language model, I don't have a profession or occupation" becouse we do not ask it a question as a user.

    let conclusion = ''

    for(const expectation of meeting.expectations)
    {
      conclusion += 'Expectation\n'
      conclusion += expectation.reasons.reduce((output, topic) => output + '\n' + topic.content, '')
      conclusion += '\n\n'
      conclusion += 'Conclusion\n'
      conclusion += expectation.conclusion + '\n'
    }

    console.log('meet conclusion.... ', conclusion)

    return conclusion
  }

  /**
   * @param {string}                                      projectId 
   * @param {array<SuperduperSquad.Schema.Entity.Topic>}  reasons 
   * @param {SuperduperSquad.Schema.Entity.Actor}         alpha
   * @param {SuperduperSquad.Schema.Entity.Actor}         beta
   */
  async discuss(projectId, reasons, alpha, beta)
  {
    console.log('discuss... ')

    const 
      conclusion    = await this.reason(projectId, beta, reasons),
      alphaActorId  = alpha.id, 
      betaActorId   = beta.id,
      discussion    = this.schema.compose('superduper-squad/schema/entity/discussion', { alphaActorId, betaActorId, reasons, conclusion })

    alpha.discussions.push(discussion)
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
      feedbackMessage = this.composeTopic('user', feedback)

    for(const expectation of meeting.expectations)
    {
      const 
        conclusionAssistant = this.composeTopic('assistant', expectation.conclusion),
        feedbackConclusion  = await this.conclude(alpha, [ ...expectation.reasons, conclusionAssistant, feedbackMessage ])

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
    console.log('reasoning... ')

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
