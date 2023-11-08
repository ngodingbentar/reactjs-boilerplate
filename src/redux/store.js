import {configureStore} from "@reduxjs/toolkit"
import countReducer from './slices/countSlice'

const store = configureStore({
  reducer: {
    counter: countReducer
  }
})

// store.subscribe(() => {
//   console.log('store updated', store.getState())
// })

export default store