import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message'

describe( 'Message Component', () => {
  
  const wrapper = shallowMount( Message, {
    propsData: {
      title: 'Slot Message'
    },
    slots: {
      content: 'Content with slots'
    }
  })

  it( 'has a title prop', () => {
    expect( wrapper.props( 'title' ) ).toBe( 'Slot Message' )
  })
  
  it( 'it has a content slot', () => {
    // TODO
    // expect( wrapper.html() ).toContain( '<div class="message-body">Content with slots</div>' )
  })
  
})
