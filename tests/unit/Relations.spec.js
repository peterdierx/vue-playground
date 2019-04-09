import { shallowMount } from '@vue/test-utils'
import Relations from '@/components/Relations'

describe( 'Relations Component', () => {

  it( 'has a title', () => {
    const wrapper = shallowMount( Relations )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5">Relations</h5>' )
  })
  
})
