import { IRankingScoreModel } from '../../data/models'
import { ILoadLastRankingRepository } from '../../data/protocols'
import { ranking } from '../data-sources'

export class FakeRankingRepository implements ILoadLastRankingRepository {
  loadLastRanking = async (): Promise<IRankingScoreModel[]> => {
    return ranking.map((element) => ({
      player: element.user,
      score: element.score,
      matchDate: new Date(element.date),
      heroes: element.heroes
    }))
  }
}
