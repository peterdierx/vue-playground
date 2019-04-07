import { shallowMount } from '@vue/test-utils'
import Watchers from '@/components/Watchers'

describe( 'Watchers Component', () => {
  
  it( 'has a title', () => {
    const wrapper = shallowMount( Watchers )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5">Watchers</h5>' )
  })
  
  it( 'has a change name button', () => {
    const wrapper = shallowMount( Watchers )
    expect( wrapper.html() ).toContain( '<button class="button is-link spaced">Change Name</button>' )
  })
  
  it( 'renders name', () => {
    const wrapper = shallowMount( Watchers )
    expect( wrapper.html() ).toContain( 'John' )
  })
  
  it( 'clicking change name button changes status', () => {
    const wrapper = shallowMount( Watchers )
    wrapper.find( '.button.is-link' ).trigger( 'click' )
    expect( wrapper.text() ).toContain( 'John = John Doe ' )
  })
  
})
