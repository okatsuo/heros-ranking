import { IRankingScore } from '../../domain/entities'
import { RankingUnavailableError } from '../../domain/errors'
import { ILastRankingLoader } from '../../domain/usecases'
import { ILoadLastRankingRepository } from '../protocols'

export class LastRankingLoaderService implements ILastRankingLoader {
  constructor (
    private readonly loadLastRankingRepository: ILoadLastRankingRepository
  ) {}

  load = async (): Promise<IRankingScore[]> => {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError()
    }
    return await this.loadLastRankingRepository.loadLastRanking()
  }
}
