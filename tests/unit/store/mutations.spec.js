import mutations from '@/store/mutations'

describe( 'Store Mutations', () => {
  
  it( 'INCREMENT_COUNTER', () => {
    const state = { counter: 0 }
    mutations.INCREMENT_COUNTER( state )
    expect( state.counter ).toBe( 1 )
  })
  
  it( 'DECREMENT_COUNTER', () => {
    const state = { counter: 0 }
    mutations.DECREMENT_COUNTER( state )
    expect( state.counter ).toBe( -1 )
  })
  
  it( 'RESET_COUNTER ', () => {
    const state = { counter: 5 }
    mutations.RESET_COUNTER( state )
    expect( state.counter ).toBe( 0 )
  })
  
})
