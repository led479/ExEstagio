<template>
  <b-card :title="disciplina.codigo" style="max-width: 20rem;">
    <b-card-text>{{ disciplina.nome }}</b-card-text>
    <nuxt-link :to="`/disciplinas/${disciplina.codigo}`">Ver</nuxt-link>
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
