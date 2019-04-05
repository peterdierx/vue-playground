import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem'

describe( 'TodoItem Component', () => {
  
  const todo = {
    id: 1,
    title: 'Get Groceries',
    completed: false
  }

  it( 'has a todo object as prop', () => {
    const wrapper = shallowMount( TodoItem, {
      propsData: { todo }
    })
    expect( wrapper.props( 'todo' ).title ).toBe( 'Get Groceries' )
  })
  
})
