import axios from './axios'

class Disciplina {
  
  constructor() {
    this.api = axios
  }

  list() {
    return this.api.get('/disciplinas').then(res => res.data)
  }
}

export default new Disciplina()