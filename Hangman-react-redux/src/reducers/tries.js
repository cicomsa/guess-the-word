import {NUMBER_TRIES} from '../actions/tries'

const initialState = 4

export default (state = initialState, action) => {
  switch(action.type) {
    case NUMBER_TRIES:
      return state - 1
    default:
      return state
  }
}
