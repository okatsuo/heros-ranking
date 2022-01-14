import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Player {
  @Field()
  name: string

  @Field()
  country: string
}
