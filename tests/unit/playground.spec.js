import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Playground from '@/views/Playground'

describe( 'Playground Component', () => {
  
  const wrapper = shallowMount( Playground, { 
    stubs: { 
      RouterLink: RouterLinkStub 
    } 
  })

  it( 'has a router-link to home', () => {
    expect( wrapper.find( { ref: 'home' } ).props().to ).toBe( '/' )
  })

  it( 'has a router-link to about', () => {
    expect( wrapper.find( { ref: 'about' } ).props().to ).toBe( '/about' )
  })
  
  it( 'has a router-link to counter', () => {
    expect( wrapper.find( { ref: 'counter'} ).props().to ).toBe( '/counter' )
  })
  
  it( 'has a router-link to games', () => {
    expect( wrapper.find( { ref: 'games' } ).props().to ).toBe( '/games' )
  })
  
  it( 'has a router-link to todos', () => {
    expect( wrapper.find( { ref: 'todos' } ).props().to ).toBe( '/todos' )
  })
  
})
