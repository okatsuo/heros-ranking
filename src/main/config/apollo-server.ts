import { Express } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { RankingResolver } from '../graphql/resolvers/ranking'

export const setupApolloServer = async (app: Express): Promise<void> => {
  const schema = await buildSchema({
    resolvers: [RankingResolver]
  })

  const server = new ApolloServer({
    schema
  })

  await server.start()
  server.applyMiddleware({ app })
}
