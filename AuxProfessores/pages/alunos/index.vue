<template>
  <b-container fluid class="col-md-3">
    <div class="mb-3 mt-4">
      <aluno
        v-for="(item, index) in alunos"
        :key="index"
        :aluno="item"
        @abrirMatriculas="abrirModalMatricula"
      ></aluno>
    </div>

    <modal-matricula
      v-if="alunoDaMatricula"
      ref="matricula"
      :aluno="alunoDaMatricula"
    ></modal-matricula>

    <b-button class="primary mb-2" @click="exibeForm">Novo aluno</b-button>

    <b-form v-if="mostrarForm">
      <b-form-group id="nome" label="Nome do aluno">
        <b-form-input id="nome-input" v-model="aluno.nome"></b-form-input>
      </b-form-group>
      <b-form-group id="login" label="Login do aluno">
        <b-form-input id="login-input" v-model="aluno.login"></b-form-input>
      </b-form-group>
      <b-button id="cadastrar-aluno" class="mb-2">Criar</b-button>
    </b-form>

    <nuxt-link to="/" class="button--grey">Voltar</nuxt-link>
  </b-container>
</template>

<script>
import Aluno from '~/components/Aluno.vue'
import ModalMatricula from '~/components/ModalMatricula.vue'

export default {
  name: 'Alunos',
  components: { Aluno, ModalMatricula },
  data() {
    return {
      aluno: {},
      alunoDaMatricula: {},
      mostrarForm: false,
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
  },
  methods: {
    exibeForm() {
      this.mostrarForm = !this.mostrarForm
      this.aluno = {}
    },
    abrirModalMatricula(aluno) {
      this.alunoDaMatricula = aluno
      this.$refs.matricula.show()
    }
  }
}
</script>
