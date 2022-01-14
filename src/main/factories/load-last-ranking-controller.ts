import { LastRankingLoaderService } from '../../data/services'
import { FakeRankingRepository } from '../../infra/repositories'
import { LoadLastRankingController } from '../../presentation/controlers'
import { IController } from '../../presentation/protocols'

export const makeLoadLastRankingController = (): IController => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repo)
  return new LoadLastRankingController(loader)
}
