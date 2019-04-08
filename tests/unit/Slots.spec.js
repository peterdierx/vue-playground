import { shallowMount, mount } from '@vue/test-utils'
import Slots from '@/views/Slots'

describe( 'Slots Component', () => {
  
  it( 'has a title', () => {
    const wrapper = mount( Slots )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5 has-text-danger">Slots</h5>' )
  })
  
})
