import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class Heroes {
  @Field()
  name: string

  @Field(() => Int)
  level: number
}
