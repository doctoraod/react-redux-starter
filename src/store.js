import { createStore, compose } from 'redux'
import devTools from 'redux-devtools'
import rootReducer from './rootReducer'

const enhancer = compose(
  devTools,
)

const store = createStore(
  rootReducer,
  enhancer,
  window.devToolsExtension && window.devToolsExtension(),
)

export default store
