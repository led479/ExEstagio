<template>
  <b-card :title="professor.nome" style="max-width: 20rem;">
    <b-card-text>{{ professor.login }}</b-card-text>
    <b-link :id="`link-aviso-${professor.login}`" @click="abrirModalAvisos"
      >Criar aviso</b-link
    ><br />
    <b-link :id="`link-nota-${professor.login}`" @click="abrirModalDisc"
      >Página de notas</b-link
    >
    <b-modal ref="modalDisc" title="Disciplinas">
      <b-form-select :options="['ine5614', 'abc1234']"></b-form-select>
    </b-modal>
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
      this.$emit('abrirAvisos', this.professor)
    },
    abrirModalDisc() {
      this.$refs.modalDisc.show()
    }
  }
}
</script>
