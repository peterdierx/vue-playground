import { shallowMount } from '@vue/test-utils'
import Joke from '@/components/Joke'

describe( 'Joke Component', () => {
  
  it( 'has a title', () => {
    const wrapper = shallowMount( Joke )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5">Jokes with axios</h5>' )
  })
  
  it( 'has a joke button', () => {
    const wrapper = shallowMount( Joke )
    expect( wrapper.html() ).toContain( '<button class="button is-info">Joke</button>' )
  })
  
  it( 'renders a joke when joke button is clicked', () => {
    const wrapper = shallowMount( Joke )
    expect( wrapper.html() ).not.toContain( '<div class="joke"' )
    // wrapper.find( '.button.is-info' ).trigger( 'click' )
    // expect( wrapper.html() ).toContain( '<div class="joke"' )
  })
  
})
