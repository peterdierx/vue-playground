import { mount } from '@vue/test-utils'
import Games from '@/views/Games'

describe( 'Games Component', () => {
  
  it( 'renders a list of 4 games', () => {
    const wrapper = mount( Games, { stubs: [ 'router-link' ] } )
    expect( wrapper.findAll( 'li' ) ).toHaveLength( 4 )
  })
  
})
