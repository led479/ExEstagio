<template>
  <b-container fluid>
    <h1>{{ disciplina.codigo }}</h1>
    <h2>{{ disciplina.nome }}</h2>
    <h3>{{ disciplina.professor.nome }}</h3>
    <h5>Alunos:</h5>
    <ul>
      <li v-for="(aluno, idx) in disciplina.alunos" :key="idx">
        {{ aluno.nome }}
      </li>
    </ul>
  </b-container>
</template>

<script>
export default {
  name: 'Disciplina',
  validate({ params }) {
    return /^[A-Z]{3}[0-9]{4}$/.test(params.codigo)
  },
  data() {
    return {
      codigo: this.$route.params.codigo,
      disciplina: Object
    }
  },
  created() {
    this.buscaDisciplina()
  },
  methods: {
    buscaDisciplina() {
      // this.$http.get(api_url/disciplinas/#{codigo})
      //   .then(response => {
      //     this.disciplina = response.data
      //   })
      this.disciplina = {
        codigo: this.codigo,
        nome: 'Disciplina placeholder',
        professor: {
          nome: 'Antônio Carlos Mariani',
          login: 'mariani'
        },
        alunos: [
          {
            nome: 'Rolf Zambon',
            login: 'led479'
          },
          {
            nome: 'Lucas Andrade',
            login: 'PyMountain'
          },
          {
            nome: 'José França',
            login: 'zefranca'
          }
        ]
      }
    }
  }
}
</script>
