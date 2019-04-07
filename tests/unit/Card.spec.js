import { shallowMount } from '@vue/test-utils'
import Card from '@/views/Card'

describe( 'Card Component', () => {
  
  it( 'has a title', () => {
    const wrapper = shallowMount( Card )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5 has-text-danger">Card</h5>' )
  })
  
})
