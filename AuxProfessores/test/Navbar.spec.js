import { mount, createLocalVue } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import BootstrapVue from 'bootstrap-vue/es'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const wrapper = mount(Navbar, { localVue })

describe('Navbar.vue', () => {
  test('possui o título da aplicação e os links para alunos, professores e disciplinas', () => {
    let titulo = wrapper.find('#titulo')
    expect(titulo.text()).toBe('AuxProfessores')

    let link_alunos = wrapper.find('#link-alunos')
    expect(link_alunos.text()).toBe('Alunos')
    
    let link_professores = wrapper.find('#link-professores')
    expect(link_professores.text()).toBe('Professores')

    let link_disciplinas = wrapper.find('#link-disciplinas')
    expect(link_disciplinas.text()).toBe('Disciplinas')
  })
})