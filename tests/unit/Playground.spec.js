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
  
  it( 'has a router-link to ecovue', () => {
    expect( wrapper.find( { ref: 'ecovue' } ).props().to ).toBe( '/ecovue')
  })
  
  it( 'has a router-link to watchers', () => {
    expect( wrapper.find( { ref: 'watchers' } ).props().to ).toBe( '/watchers' )
  })
  
  it( 'has a router-link to props', () => {
    expect( wrapper.find( { ref: 'props' } ).props().to ).toBe( '/props' )
  })

  it( 'has a router-link to card', () => {
    expect( wrapper.find( { ref: 'card' } ).props().to ).toBe( '/card' )
  })

  it( 'has a router-link to jokes', () => {
    expect( wrapper.find( { ref: 'jokes' } ).props().to ).toBe( '/jokes' )
  })
  
  it( 'has a router-link to slots', () => {
    expect( wrapper.find( { ref: 'slots' } ).props().to ).toBe( '/slots' )
  })

  it( 'has a router-link to filters', () => {
    expect( wrapper.find( { ref: 'filters' } ).props().to ).toBe( '/filters' )
  })

  it( 'has a router-link to directives', () => {
    expect( wrapper.find( { ref: 'directives' } ).props().to ).toBe( '/directives' )
  })

  it( 'has a router-link to router', () => {
    expect( wrapper.find( { ref: 'router' } ).props().to ).toBe( '/router' )
  })

  it( 'has a router-link to modal', () => {
    expect( wrapper.find( { ref: 'modal' } ).props().to ).toBe( '/modal' )
  })

})
