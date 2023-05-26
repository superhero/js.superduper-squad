/**
 * @memberof SuperduperSquad.Domain
 */
class Actor
{
  constructor(ai, schema, eventsource, manager)
  {
    this.ai           = ai
    this.schema       = schema
    this.eventsource  = eventsource
    this.manager      = manager
  }

  /**
   * @param {SuperduperSquad.Schema.Entity.Meeting} meeting 
   */
  async meet(projectId, meeting, previousConclusion)
  {
    const
      alpha         = await this.manager.findActor(projectId, meeting.alphaActorId),
      betas         = await Promise.all(meeting.betaActorIds.map((actorId) => this.manager.findActor(projectId, actorId))),
      conclusions   = [],
      previousTopic = composeTopic('message', previousConclusion)

    for(const reasoning of meeting.expectations)
    {
      const reasoningConclusions = []
      for(const beta of betas)
      {
        const conclusion = await this.discuss([...reasoning, previousTopic], alpha, beta)
        reasoningConclusions.push(conclusion)
      }

      // I feel like I'm loosing out on these conclusions...
      // if there is a discussion then the problem is solved... or potentially at least...
      const conclusion = await this.conclude(alpha, reasoningConclusions)
      conclusions.push(conclusion)
    }

    const conclusion = await this.conclude(alpha, conclusions)
    return conclusion
  }

  /**
   * @param {string} role 
   * @param {string} content 
   */
  composeTopic(role, content)
  {
    this.schema.compose('superduper-squad/schema/entity/topic', { role, content })
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
      team        = await Promise.all(actor.team.map((actorId) => this.manager.findActor(projectId, actorId))),
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
