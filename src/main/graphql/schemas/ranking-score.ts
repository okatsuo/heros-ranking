import { Field, Int, ObjectType } from 'type-graphql'
import { Heroes } from './heroes'
import { Player } from './player'

@ObjectType()
export class RankingScore {
  @Field(() => Player)
  player: Player

  @Field(() => Int)
  score: number

  @Field()
  matchDate: string

  @Field(() => [Heroes])
  heroes: [Heroes]
}
