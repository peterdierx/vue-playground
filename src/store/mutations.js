// COMMIT MUTATIONS
export default {
  INCREMENT_COUNTER( state ) {
    state.counter++
  },
  DECREMENT_COUNTER( state ) {
    state.counter--
  },
  RESET_COUNTER( state ) {
    state.counter = 0
  }
}
