import { shallowMount } from '@vue/test-utils'
import Directive from '@/components/Directive'

describe( 'Directive Component', () => {
  
  it( 'it has title', () => {
    const wrapper = shallowMount( Directive )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5">Directives</h5>' )
  })
  
})
