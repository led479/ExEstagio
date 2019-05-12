<template>
  <b-card :title="professor.nome" style="max-width: 20rem;">
    <b-card-text>{{ professor.login }}</b-card-text>
    <b-link @click="abrirModalAvisos">Criar aviso</b-link>
  </b-card>
</template>

<script>
export default {
  props: {
    professor: {
      type: Object,
      required: true
    }
  },
  methods: {
    abrirModalAvisos() {
      this.$emit('abrirAvisos')
    }
  }
}
</script>
