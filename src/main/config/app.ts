import express from 'express'
import { setupApolloServer } from './apollo-server'
import { setupRoutes } from './routes'

const app = express()
setupRoutes(app)
void setupApolloServer(app)
export default app
