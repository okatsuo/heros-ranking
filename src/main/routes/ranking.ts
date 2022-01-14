
import { Router } from 'express'
import { adaptRoute } from '../adapter'
import { makeLoadLastRankingController } from '../factories/load-last-ranking-controller'

export default (router: Router): void => {
  router.get('/rankings/last', adaptRoute(makeLoadLastRankingController()))
}
