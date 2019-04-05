import { shallowMount } from '@vue/test-utils'
import About from '@/views/About'

describe( 'About Component', () => {
  
  it( 'renders about view', () => {
    const wrapper = shallowMount( About )
    expect( wrapper.element ).toMatchSnapshot()
  })
  
})
