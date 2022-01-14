import { IRankingScore } from '../../domain/entities'

export class IRankingScoreViewModel {
  player: Player
  score: number
  matchDate: string
  heroes: Hero[]

  static map (entity: IRankingScore): IRankingScoreViewModel {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString()
    }
  }

  static mapCollection (entities: IRankingScore[]): IRankingScoreViewModel[] {
    return entities.map((entity) => IRankingScoreViewModel.map(entity))
  }
}

type Player = {
  name: string
  country: string
}

type Hero = {
  name: string
  level: number
}
