import { shallowMount } from '@vue/test-utils'
import Props from '@/views/Props'

describe( 'Props Component', () => {
  
  it( 'has a title', () => {
    const wrapper = shallowMount( Props )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5 has-text-danger">Props and Slots</h5>' )
  })
  
})
