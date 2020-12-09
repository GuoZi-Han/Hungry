import { handleActions } from 'redux-actions'

import {
    gzhSearchShop
} from '@/constants/actionTypes'

const defaultState = {
  data: [],
}

export default handleActions({
  [gzhSearchShop]: (state, { payload }) => {
    return { ...state, data: payload.data }
  },
}, defaultState)
