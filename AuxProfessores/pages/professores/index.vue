<template>
  <b-container fluid class="col-md-3">
    <div class="mb-3 mt-4">
      <professor
        v-for="(item, index) in professores"
        :key="index"
        :professor="item"
        @abrirAvisos="abrirModalAviso"
      ></professor>
    </div>

    <modal-aviso
      v-if="professorDoAviso"
      ref="aviso"
      :professor="professorDoAviso"
    ></modal-aviso>

    <b-button class="primary mb-2" @click="exibeForm">Novo professor</b-button>

    <b-form v-if="mostrarForm">
      <b-form-group id="nome" label="Nome do professor">
        <b-form-input id="nome-input" v-model="professor.nome"></b-form-input>
      </b-form-group>
      <b-form-group id="login" label="Login do professor">
        <b-form-input id="login-input" v-model="professor.login"></b-form-input>
      </b-form-group>
      <b-button id="cadastrar-professor" class="mb-2">Criar</b-button>
    </b-form>

    <nuxt-link to="/" class="button--grey">Voltar</nuxt-link>
  </b-container>
</template>

<script>
import Professor from '~/components/Professor.vue'
import ModalAviso from '~/components/ModalAviso.vue'

export default {
  name: 'Professores',
  components: { Professor, ModalAviso },
  data() {
    return {
      professor: {},
      professorDoAviso: {},
      mostrarForm: false,
      professores: [
        {
          nome: 'Antônio Carlos Mariani',
          login: 'mariani'
        },
        {
          nome: 'Custódio',
          login: 'custodio'
        }
      ]
    }
  },
  methods: {
    exibeForm() {
      this.mostrarForm = !this.mostrarForm
      this.professor = {}
    },
    abrirModalAviso(professor) {
      this.professorDoAviso = professor
      this.$refs.aviso.show()
    }
  }
}
</script>
