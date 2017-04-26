export const FETCH_NUMBER = 'FETCH_NUMBER'
export const ADD_NUMBER = 'ADD_NUMBER'

export const fetchNumber = () => {
  return {
    type: FETCH_NUMBER,
  }
}

export const addNumber = () => {
  return {
    type: ADD_NUMBER,
  }
}
