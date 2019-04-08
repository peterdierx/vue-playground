import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import GameShow from '@/components/GameShow'

describe( 'GameShow Component', () => {
  
  const wrapper = shallowMount( GameShow, {
    propsData: {
      name: 'Sekiro',
      info: 'Samurai Hellhole'
    },
    stubs: { 
      RouterLink: RouterLinkStub 
    }
  })

  it( 'it has a name and info prop', () => {
    expect( wrapper.props( 'name' )).toBe( 'Sekiro' )
    expect( wrapper.props( 'info' )).toBe( 'Samurai Hellhole' )
  })
  
  it( 'renders an h5 title with name prop', () => {
    expect( wrapper.find( 'h5' ).html() ).toBe( '<h5 class="title is-5">Sekiro</h5>' )
  })

  it( 'renders an h4 subtitle with info prop', () => {
    expect( wrapper.find( 'h4' ).html() ).toBe( '<h4 class="subtitle">Samurai Hellhole</h4>' )  
  })
  
  it( 'has a back button', () => {
    expect( wrapper.find( 'button' ).text() ).toBe( 'Back' )
  })
  
  it( 'has a click event on the back button', () => {
    // TODO
  })
  
})

