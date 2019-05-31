<template>
  <b-container fluid class="col-md-3">
    <div class="mb-3 mt-4">
      <aluno
        v-for="item in alunos"
        :key="item._id"
        :aluno="item"
        @abrirMatriculas="abrirModalMatricula"
      ></aluno>
    </div>

    <modal-matricula
      v-if="alunoDaMatricula"
      ref="matricula"
      :aluno="alunoDaMatricula"
    ></modal-matricula>

    <b-button class="secondary" @click="exibeForm">Novo aluno</b-button>
    <b-link to="/" class="btn btn-secondary">Voltar</b-link>

    <b-form v-if="mostrarForm">
      <b-form-group id="nome" label="Nome do aluno">
        <b-form-input id="nome-input" v-model="aluno.nome"></b-form-input>
      </b-form-group>
      <b-button id="cadastrar-aluno" class="mb-2" @click="criaAluno"
        >Criar</b-button
      >
    </b-form>
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
      alunos: []
    }
  },
  mounted() {
    this.buscaAlunos()
  },
  methods: {
    buscaAlunos() {
      this.$axios.get(`${process.env.API_URL}/alunos`).then(response => {
        this.alunos = response.data
      })
    },
    exibeForm() {
      this.mostrarForm = !this.mostrarForm
      this.aluno = {}
    },
    abrirModalMatricula(aluno) {
      this.alunoDaMatricula = aluno
      this.$refs.matricula.show()
    },
    criaAluno() {
      this.$axios.post(`${process.env.API_URL}/alunos`, this.aluno).then(() => {
        this.exibeForm()
        this.buscaAlunos()
      })
    }
  }
}
</script>
