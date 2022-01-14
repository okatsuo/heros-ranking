import { Query, Resolver } from 'type-graphql'
import { adaptResolver } from '../../adapter'
import { makeLoadLastRankingController } from '../../factories'
import { RankingScore } from '../schemas/ranking-score'

@Resolver(() => RankingScore)
export class RankingResolver {
  @Query(() => [RankingScore])
  async lastRanking (): Promise<any> {
    return adaptResolver(makeLoadLastRankingController())
  }
}
