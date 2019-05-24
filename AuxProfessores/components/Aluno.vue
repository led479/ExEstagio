<template>
  <b-card :title="aluno.nome" style="max-width: 20rem;">
    <b-card-text>{{ aluno.matricula }}</b-card-text>
    <b-link @click="abrirModalMatricula">Matriculas</b-link>
  </b-card>
</template>

<script>
export default {
  props: {
    aluno: {
      type: Object,
      required: true
    }
  },
  methods: {
    abrirModalMatricula() {
      this.$emit('abrirMatriculas', this.aluno)
    }
  }
}
</script>
