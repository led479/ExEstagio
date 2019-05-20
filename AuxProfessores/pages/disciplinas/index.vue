<template>
  <b-container fluid class="col-md-3">
    <div class="mb-2">
      <disciplina
        v-for="(disciplina, idx) in disciplinas"
        :key="idx"
        :disciplina="disciplina"
      ></disciplina>
    </div>

    <nuxt-link to="/" class="button--grey">Voltar</nuxt-link>
  </b-container>
</template>

<script>
import Disciplina from '~/components/Disciplina.vue'

export default {
  components: { Disciplina },
  data() {
    return {
      disciplinas: [
        {
          codigo: 'INE5614',
          nome: 'Análise de Projeto de Sistemas'
        },
        {
          codigo: 'ABC1234',
          nome: 'Disciplina de Teste'
        }
      ]
    }
  }
}
</script>
