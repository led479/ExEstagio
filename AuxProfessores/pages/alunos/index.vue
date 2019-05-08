<template>
  <b-container>
    <div>
      <aluno
        v-for="(aluno, index) in alunos"
        :key="index"
        :aluno="aluno"
      ></aluno>
    </div>
    <nuxt-link to="/" class="button--grey">Voltar</nuxt-link>
  </b-container>
</template>

<script>
import Aluno from '~/components/Aluno.vue'

export default {
  name: 'Alunos',
  components: { Aluno },
  data() {
    return {
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
</script>
