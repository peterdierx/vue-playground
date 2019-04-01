import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Home from '@/views/Home'

describe( 'Home Component', () => {
  
  const wrapper = shallowMount( Home, { 
    stubs: { 
      RouterLink: RouterLinkStub 
    } 
  })

  it( 'has a title with a welcome message', () => {  
    expect( wrapper.html() ).toContain( '<h4 class="title is-4">Vue Playground</h4>' )
  })
  
  it( 'has a start button', () => {
    expect( wrapper.html() ).toContain( '<button class="button is-primary">Start</button>' )
  })
  
  it( 'has a router-link to about', () => {
    expect( wrapper.find( RouterLinkStub ).props().to ).toBe( '/about' )
  })
  
})
