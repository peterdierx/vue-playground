import { shallowMount, mount } from '@vue/test-utils'
import Todos from '@/components/Todos'

describe( 'Todos Component', () => {
  
  it( 'receives an array as props', () => {
    const wrapper = shallowMount( Todos, {
      propsData: {
        todos: [
          { id: 1, title: 'Get Groceries',   completed: false },
          { id: 2, title: 'Walk the Dog',    completed: false },
          { id: 3, title: 'Go Cycling',      completed: false },
          { id: 4, title: 'Wash the Dishes', completed: false }
        ]
      }
    })
    expect( wrapper.props( 'todos' )[ 0 ][ 'title' ] ).toBe( 'Get Groceries' )
  })
  
})
