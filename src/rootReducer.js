import { combineReducers } from 'redux'
import counter from './scenes/counter/counter.reducer'

const rootReducer = combineReducers({
  counter,
})

export default rootReducer
