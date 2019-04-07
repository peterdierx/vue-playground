import { shallowMount } from '@vue/test-utils'
import Social from '@/components/Social'

describe( 'Social Component', () => {
  
  const wrapper = shallowMount( Social, {
    propsData: {
      name:    'John Doe',
      twitter: '@johndoe'
    }
  })

  it( 'renders a title with name', () => {
    expect( wrapper.html() ).toContain( '<p class="title is-4 has-text-link">John Doe</p>' )
  })
  
  it( 'renders a subtitle with twitter handle', () => {
    expect( wrapper.html() ).toContain( '<p class="subtitle is-6">@johndoe</p>' )
  })
  
})
