import { shallowMount } from '@vue/test-utils'
import VueEco from '@/views/VueEco'

describe( 'VueEco Component', () => {
  
  it( 'has a title', () => {
    const wrapper = shallowMount( VueEco, { stubs: [ 'router-link' ] } )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5 has-text-success">Vue Ecosystem</h5>')
  })
  
})
