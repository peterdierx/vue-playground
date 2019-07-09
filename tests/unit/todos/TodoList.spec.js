import { shallowMount, mount } from '@vue/test-utils'
import TodoList from '@/views/TodoList'

describe( 'TodoList Component', () => {
  
  it( 'has an h5 title named Todos', () => {
    const wrapper = shallowMount( TodoList )
    expect( wrapper.html() ).toContain( '<h5 class="title is-5">Todos</h5>' )
  })
  
  it( 'renders 5 todos', () => {
    const wrapper = mount( TodoList )
    expect( wrapper.findAll( 'p' ) ).toHaveLength( 5 )
  })
  
})
