import { handleActions } from 'redux-actions'

const defaultState = {
  data: [],
}

export default handleActions({
  // [GET_HOME_DATA]: (state, action) => ({ ...state, data: action.payload }),
}, defaultState)
