import { handleActions } from 'redux-actions'

import {
  lmjfoodTypeList,
  lmjgetShopList
} from '@/constants/actionTypes'

const defaultState = {
  navdata: [],shopData: []
}

export default handleActions({
  [lmjfoodTypeList]: (state, { payload }) => {
    return { ...state, navdata: payload.data }
  },
  [lmjgetShopList]: (state, { payload }) => {
    return { ...state,shopData:payload.data}
  },
}, defaultState)
