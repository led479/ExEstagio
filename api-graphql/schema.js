import { gql } from 'apollo-server-express'
import alunoModel from './models/aluno'
import disciplinaModel from './models/disciplina'

export const typeDefs = gql`
  type Aluno {
    _id: ID,
    nome: String,
    matricula: String
  }

  type Disciplina {
    _id: ID,
    codigo: String,
    nome: String,
    alunos: [ID]
  }

  type Query {
    alunos: [Aluno],
    disciplinas: [Disciplina]
  }
`

export const resolvers = {
  Query: {
    alunos() {
      return alunoModel.list()
    },
    disciplinas() {
      return disciplinaModel.list()
    }
  }
}