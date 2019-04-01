import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Playground from '@/views/Playground'

describe( 'Playground Component', () => {
  
  const wrapper = shallowMount( Playground, { 
    stubs: { 
      RouterLink: RouterLinkStub 
    } 
  })

  it( 'has a router-link to home', () => {
    expect( wrapper.find( RouterLinkStub ).props().to ).toBe( '/' )  
  })

})
