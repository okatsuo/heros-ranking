import { IRankingScore } from '../entities'

export type ILastRankingLoader = {
  load: () => Promise<IRankingScore[]>
}
