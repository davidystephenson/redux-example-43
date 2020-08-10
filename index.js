// import redux from 'redux'
const redux = require('redux')

const { createStore } = redux

const initial = { laptop: 1000, monitor: 300, mouse: 5 }

function reducer (state = initial, action) {
  console.log('\nreducer state test:', state)
  console.log('action test:', action)
  switch (action.type) {
    case 'sale': {
      const price = state[action.payload] // 300

      const newPrice = price * 0.8

      return { ...state, [action.payload]: newPrice }
    }

    case 'markup': {
      const price = state[action.payload]

      const newPrice = price * 1.2

      return { ...state, [action.payload]: newPrice }
    }

    default: {
      return state
    }
  }
}

const store = createStore(reducer)
const state = store.getState()
console.log('state test:', state)

const action = { type: 'sale', payload: 'monitor' }
store.dispatch(action)

console.log('monitor test:', store.getState())

store.dispatch({ type: 'sale', payload: 'mouse' })
console.log('mouse test:', store.getState())

store.dispatch({ type: 'markup', payload: 'laptop' })
console.log('laptop test:', store.getState())