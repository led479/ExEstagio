import axios from './axios'

class Aluno {
  
  constructor() {
    this.api = axios
  }

  list() {
    return this.api.get('/alunos').then(res => res.data)
  }
}

export default new Aluno()