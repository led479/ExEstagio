<template>
  <b-modal id="modal-aviso" ref="aviso" title="Criar aviso">
    <b-form-group id="texto" label="Aviso">
      <b-form-textarea
        id="texto-input"
        v-model="texto"
        placeholder="Insira o texto do aviso..."
      ></b-form-textarea>
    </b-form-group>
    <b-form-group label="Alunos que receberão o aviso">
      <b-form-checkbox-group
        id="alunos-checkbox-group"
        v-model="alunosSelecionados"
        :options="alunosCheckboxGroup"
        name="alunos-avisos"
        switches
        stacked
      ></b-form-checkbox-group>
      <b-button size="sm" @click="selecionarTodosAlunos"
        >Selecionar todos</b-button
      >
      <b-button size="sm" @click="descelecionarTodosAlunos"
        >Descelecionar todos</b-button
      >
    </b-form-group>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalAviso',
  props: {
    professor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      texto: '',
      alunos: [],
      alunosCheckboxGroup: [],
      alunosSelecionados: []
    }
  },
  created() {
    this.buscaAlunos()
  },
  methods: {
    show() {
      this.$refs.aviso.show()
    },
    buscaAlunos() {
      // this.$http.get(api_url/alunos_do_professor/#{id_professor})
      //   .then(response => {
      //      this.alunos = response.data
      //      this.preparaListaAlunos()
      //   })
      this.alunos = [
        {
          nome: 'Rolf Zambon',
          matricula: 'led479'
        },
        {
          nome: 'Lucas Andrade',
          matricula: 'PyMountain'
        },
        {
          nome: 'José França',
          matricula: 'zefranca'
        }
      ]
      this.preparaListaAlunos()
    },
    preparaListaAlunos() {
      this.alunos.forEach(aluno => {
        this.alunosCheckboxGroup.push({
          text: aluno.nome,
          value: aluno.matricula
        })
      })
    },
    selecionarTodosAlunos() {
      this.alunosSelecionados = this.alunosCheckboxGroup.map(
        option => option.value
      )
    },
    descelecionarTodosAlunos() {
      this.alunosSelecionados = []
    }
  }
}
</script>
