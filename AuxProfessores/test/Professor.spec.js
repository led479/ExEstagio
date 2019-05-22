import { mount } from '@vue/test-utils'
import Professor from '@/components/Professor.vue'

import { createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue/es'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)



describe('Professor.vue', () => {
  test('emite evento abrirAvisos ao clicar no link criar aviso', () => {
    const wrapper = mount(Professor, {
      localVue,
      propsData: {
        professor: {
          nome: "Professor de Teste",
          login: "teste123"
        }
      }
    })
    expect(wrapper.text()).toContain('Criar aviso')
    wrapper.find('a#link-aviso-teste123').trigger('click')
    expect(wrapper.emitted('abrirAvisos')).toBeTruthy()
  })
})