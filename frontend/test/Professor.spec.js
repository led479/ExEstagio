import { mount, createLocalVue } from '@vue/test-utils'
import Professor from '@/components/Professor.vue'
import BootstrapVue from 'bootstrap-vue/es'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const professor = {
  nome: "Professor de Teste",
  login: "teste123"
}

const wrapper = mount(Professor, {
  localVue,
  propsData: {
    professor: professor
  }
})

describe('Professor.vue', () => {
  test('possui o nome e login do professor, e um link com o texto Criar aviso', () => {
    expect(wrapper.text()).toContain(professor.nome)
    expect(wrapper.text()).toContain(professor.login)
    expect(wrapper.text()).toContain('Criar aviso')
  })

  test('emite o evento abrirAvisos passando o professor ao clicar em Criar aviso', () => {
    wrapper.find(`a#link-aviso-${professor.login}`).trigger('click')
    expect(wrapper.emitted().abrirAvisos[0]).toEqual([professor])
  })
})