<template>
  <b-card :title="disciplina.codigo" style="max-width: 20rem;">
    <b-card-text>{{ disciplina.nome }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'Disciplina',
  props: {
    disciplina: {
      type: Object,
      required: true
    }
  }
}
</script>
