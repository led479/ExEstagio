<template>
  <b-modal
    id="modal-matricula"
    ref="modalMatricula"
    title="Matricular em disciplinas"
  >
    <b-form-group label="Disciplinas para se matricular:">
      <b-form-checkbox-group
        id="disciplinas-checkbox-group"
        v-model="disciplinasSelecionadas"
        :options="disciplinasCheckboxGroup"
        name="disciplinas-matricula"
        switches
        stacked
      ></b-form-checkbox-group>
      <b-button size="sm" @click="selecionarTodasDisciplinas"
        >Selecionar todas</b-button
      >
      <b-button size="sm" @click="descelecionarTodasDisciplinas"
        >Descelecionar todas</b-button
      >
    </b-form-group>
  </b-modal>
</template>

<script>
export default {
  props: {
    aluno: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      disciplinas: [],
      disciplinasCheckboxGroup: [],
      disciplinasSelecionadas: []
    }
  },
  created() {
    this.buscaDisciplinas()
  },
  methods: {
    show() {
      this.$refs.modalMatricula.show()
    },
    buscaDisciplinas() {
      this.disciplinas = [
        {
          codigo: 'INE5614',
          nome: 'Análise de Projeto de Sistemas'
        },
        {
          codigo: 'ABC1234',
          nome: 'Disciplina de Teste'
        }
      ]
      this.preparaListaDisciplinas()
    },
    preparaListaDisciplinas() {
      this.disciplinas.forEach(disc => {
        this.disciplinasCheckboxGroup.push({
          text: `${disc.codigo} - ${disc.nome}`,
          value: disc.codigo
        })
      })
    },
    selecionarTodasDisciplinas() {
      this.disciplinasSelecionadas = this.disciplinasCheckboxGroup.map(
        option => option.value
      )
    },
    descelecionarTodasDisciplinas() {
      this.disciplinasSelecionadas = []
    }
  }
}
</script>
