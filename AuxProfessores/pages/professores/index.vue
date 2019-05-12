<template>
  <b-container fluid class="col-md-3">
    <section>
      <div class="mb-2">
        <professor
          v-for="(item, index) in professores"
          :key="index"
          :professor="item"
          @abrirAvisos="$refs.aviso.show()"
        ></professor>
      </div>
    </section>

    <b-modal id="modal-aviso" ref="aviso"> </b-modal>

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

    <nuxt-link to="/">Voltar</nuxt-link>
  </b-container>
</template>

<script>
import Professor from '~/components/Professor.vue'

export default {
  name: 'Professores',
  components: { Professor },
  data() {
    return {
      professor: {},
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
    }
  }
}
</script>
