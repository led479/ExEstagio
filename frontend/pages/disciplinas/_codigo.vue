<template>
  <b-container fluid class="col-md-6">
    <h1>
      <b-badge>{{ disciplina.codigo }}</b-badge> {{ disciplina.nome }}
    </h1>
    <h3>Professor: {{ disciplina.professor.nome }}</h3>
    <b-card header="Alunos">
      <b-list-group>
        <b-list-group-item v-for="(aluno, idx) in disciplina.alunos" :key="idx">
          {{ aluno.nome }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
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
        nome: 'Disciplina Exemplo Com Nome Grande',
        professor: {
          nome: 'Antônio Carlos Mariani',
          login: 'mariani'
        },
        alunos: [
          {
            nome: 'Rolf Zambon',
            matricula: 'led479'
          },
          {
            nome: 'Lucas Andrade',
            matricula: 'PyMountain'
          },
          {
            nome: 'José França',
            matricula: 'zefranca'
          }
        ]
      }
    }
  }
}
</script>
