import 'babel-polyfill'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from './schema'

const app = express()
const port = process.env.port || 3500

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

apolloServer.applyMiddleware({ app })

app.get('/', (req, res) => res.send({ hello: 'there!' }))
app.listen(port, () => console.log(`Apollo Graphql listening on port ${port}!`))