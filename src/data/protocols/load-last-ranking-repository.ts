import { IRankingScoreModel } from '../models'

export type ILoadLastRankingRepository = {
  loadLastRanking: () => Promise<IRankingScoreModel[]>
}
