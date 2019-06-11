const axios = require('axios')

class Aluno {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000/api'
    })
  }

  all() {
    return this.api.get('/alunos').then(response => response.data)
  }

  find(args) {
    return this.api.get(`/alunos/${args.id}`).then(response => response.data)
  }

  async findByName(args) {
    let alunos = await this.all()
    console.log(alunos)
    return alunos.filter(aluno => aluno.nome == args.nome)
  }

  create(args) {
    return this.api.post(`/alunos`, {
      nome: args.alunoInput.nome,
      email: args.alunoInput.email
    }).then(response => response.data)
  }
}

module.exports = new Aluno()