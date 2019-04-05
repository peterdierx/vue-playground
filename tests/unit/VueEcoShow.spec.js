import { shallowMount } from '@vue/test-utils'
import VueEcoShow from '@/components/VueEcoShow'

describe( 'VueEcoShow Component', () => {
  
  const wrapper = shallowMount( VueEcoShow, {
    propsData: {
      info: 'Vue - The Progressive JavaScript Framework'
    }
  })

  it( 'has info as a prop', () => {
    expect( wrapper.props( 'info' ) ).toBe( 'Vue - The Progressive JavaScript Framework' )
  })
  
  it( 'renders the info', () => {
    expect( wrapper.html() ).toContain( 'Vue - The Progressive JavaScript Framework' )
  })

})
