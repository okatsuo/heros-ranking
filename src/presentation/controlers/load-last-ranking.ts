import { ILastRankingLoader } from '../../domain/usecases'
import { IController, HttpResponse, ok, serverError } from '../protocols'
import { IRankingScoreViewModel } from '../view-models'

export class LoadLastRankingController implements IController {
  constructor (
    private readonly lastRankingLoader: ILastRankingLoader
  ) {}

  handle = async (): Promise<HttpResponse<IRankingScoreViewModel[] | String>> => {
    const ranking = await this.lastRankingLoader.load()
    console.log(ranking)
    try {
      return ok(IRankingScoreViewModel.mapCollection(ranking))
    } catch (error) {
      if (error instanceof Error) return serverError(error)
      throw error
    }
  }
}
