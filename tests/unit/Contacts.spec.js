import { shallowMount } from '@vue/test-utils'
import Contacts from '@/components/Contacts'

describe( 'Contacts Component', () => {

  it( 'has a title', () => {
    const wrapper = shallowMount( Contacts )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5">Contacts</h5>' )
  })
  
})
