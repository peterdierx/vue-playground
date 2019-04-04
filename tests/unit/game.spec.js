import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Game from '@/components/Game'

describe( 'Game Component', () => {
  
  const wrapper = shallowMount( Game, {
    propsData: {
      id:   10,
      name: 'Sekiro',
      info: 'Samurai Hellhole'
    },
    stubs: { 
      RouterLink: RouterLinkStub 
    }
  })

  it( 'has an id, name and info prop', () => {
    expect( wrapper.props( 'id' ) ).toBe( 10 )
    expect( wrapper.props( 'name' ) ).toBe( 'Sekiro' )
    expect( wrapper.props( 'info') ).toBe( 'Samurai Hellhole' )
  })
  
  it( 'has a router-link to the show component', () => {
    expect( wrapper.find( RouterLinkStub ).props().to ).toEqual({
      name: 'show',
      params: {
        id:   10,
        name: 'Sekiro',
        info: 'Samurai Hellhole'
      }
    })   
  })
  
})
