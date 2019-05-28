<template>
  <b-container fluid class="col-md-3">
    <div class="mb-3 mt-4">
      <disciplina
        v-for="(item, idx) in disciplinas"
        :key="idx"
        :disciplina="item"
      ></disciplina>
    </div>

    <b-button class="secondary" @click="exibeForm">Nova disciplina</b-button>
    <b-link to="/" class="btn btn-secondary">Voltar</b-link>

    <b-form v-if="mostrarForm">
      <b-form-group id="codigo" label="Código da disciplina">
        <b-form-input
          id="codigo-input"
          v-model="disciplina.codigo"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="nome" label="Nome da disciplina">
        <b-form-input id="nome-input" v-model="disciplina.nome"></b-form-input>
      </b-form-group>
      <b-button id="cadastrar-disciplina" class="mb-2">Criar</b-button>
    </b-form>
  </b-container>
</template>

<script>
import Disciplina from '~/components/Disciplina.vue'

export default {
  name: 'Disciplinas',
  components: { Disciplina },
  data() {
    return {
      mostrarForm: false,
      disciplina: {},
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
  },
  methods: {
    exibeForm() {
      this.mostrarForm = !this.mostrarForm
      this.disciplina = {}
    }
  }
}
</script>
