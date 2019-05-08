<template>
  <b-card :title="aluno.nome" style="max-width: 20rem;">
    <b-card-text>{{ aluno.login }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    aluno: Object
  }
}
</script>
