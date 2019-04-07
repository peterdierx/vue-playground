import { shallowMount } from '@vue/test-utils'
import Person from '@/components/Person'

describe( 'Person Component', () => {
  
  const hobbies = [ 'Swimming', 'Programming', 'Skydiving', 'Cycling' ]
  
  const wrapper = shallowMount( Person, {
    propsData: {
      name: 'John Doe',
      hobbies
    }
  })

  it( 'has a name prop', () => {
    expect( wrapper.props( 'name' ) ).toBe( 'John Doe' )  
  })
  
  it( 'renders the name', () => {
    expect( wrapper.html() ).toContain( '<div><b>Person:</b> John Doe</div>' )
  })
  
  it( 'has a hobbies prop', () => {
    expect( wrapper.props( 'hobbies' ) ).toBe( hobbies )
  })
  
  it( 'renders 4 hobbies', () => {
    expect( wrapper.findAll( 'li' ) ).toHaveLength( 4 )
  })
  
})
