import { handleActions } from 'redux-actions'

import {
  lmjfoodTypeList
} from '@/constants/actionTypes'

const defaultState = {
  data: [],
}

export default handleActions({
  [lmjfoodTypeList]: (state, { payload }) => {
    return { ...state, data: payload.data }
  },
}, defaultState)
