const express = require('express')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')
const alunoModel = require('./aluno')

let schema = buildSchema(`
  type Query {
    hello: String
    alunos: [Aluno]
    aluno(id: String!): Aluno
    alunoByName(nome: String!): [Aluno]
  }

  type Mutation {
    createAluno(alunoInput: AlunoInput!): Aluno
    updateAluno(alunoInput: AlunoInput!): Aluno
  }

  type Aluno {
    _id: ID
    nome: String
    email: String
    matricula: Int
  }

  input AlunoInput {
    nome: String!
    email: String!
    disciplinas: [String]
  }
`)

let hello = () => 'World!'
let alunos = () => alunoModel.all()
let findAluno = (args) => alunoModel.find(args)
let findAlunoByName = (args) => alunoModel.findByName(args)
let createAluno = (args) => alunoModel.create(args)

let root = {
  hello: hello,
  alunos: alunos,
  aluno: findAluno,
  alunoByName: findAlunoByName,
  createAluno: createAluno
}

let app = express()
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.use('/', (req, res) => res.send('<h1>Acesse a rota /graphql</h1>'))
app.listen(4000, () => console.log('Listening on port 4000!'))