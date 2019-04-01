import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe( 'Counter Component', () => {
  
  const wrapper = shallowMount( Counter )

  it( 'renders the right counter markup', () => {  
    expect( wrapper.html() ).toContain( '<h5 class="title is-5">Counter: 0</h5>' )
  })

  it( 'has a increment button', () => {
    expect( wrapper.html() ).toContain( '<span class="button is-primary">Increment</span>' )
  })
  
  it( 'has a decrement button', () => {
    expect( wrapper.html() ).toContain( '<span class="button is-link">Decrement</span>' )
  })
  
  it( 'has a reset button', () => {
    expect( wrapper.html() ).toContain( '<span class="button is-success">Reset</span>' )
  })
  
  it( 'has a counter that starts at 0', () => {
    expect( wrapper.vm.counter ).toBe( 0 )
  })
  
  it( 'increments counter by 1 clicking the increment button', () => {
    expect( wrapper.vm.counter ).toBe( 0 )
    wrapper.find( 'span.button.is-primary').trigger( 'click' )
    expect( wrapper.vm.counter ).toBe( 1 )
  })
  
  it( 'decrements counter by 1 clicking the decrement button', () => {
    const wrapper = shallowMount( Counter )
    expect( wrapper.vm.counter ).toBe( 0 )
    wrapper.find( 'span.button.is-link').trigger( 'click' )
    expect( wrapper.vm.counter ).toBe( -1 )
  })
  
  it( 'resets the counter to 0 clicking the reset button', () => {
    const wrapper = shallowMount( Counter )
    expect( wrapper.vm.counter ).toBe( 0 )
    wrapper.setData( { counter: 10 } )
    expect( wrapper.vm.counter ).toBe( 10 )
    wrapper.find( 'span.button.is-success').trigger( 'click' )
    expect( wrapper.vm.counter ).toBe( 0 )
  })
  
})
