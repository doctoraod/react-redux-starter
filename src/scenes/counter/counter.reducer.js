import { FETCH_NUMBER, ADD_NUMBER } from './counter.actions'

const initialState = {
  number: 0,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case FETCH_NUMBER:
      return {
        ...state,
      }
    case ADD_NUMBER:
      return {
        ...state,
        number: state.number + 1,
      }
    default:
      return state
  }
}
