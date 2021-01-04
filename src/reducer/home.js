import { handleActions } from 'redux-actions'

import {
  lmjfoodTypeList,
  lmjgetShopList,
  lmjGetAllShopList
} from '@/constants/actionTypes'

const defaultState = {
  navdata: [], shopData: [], typeData: []
}

export default handleActions({
  [lmjfoodTypeList]: (state, { payload }) => {
    return { ...state, navdata: payload.data }
  },
  [lmjgetShopList]: (state, { payload }) => {
    return { ...state, shopData: payload.data }
  },
  [lmjGetAllShopList]: (state, { payload }) => {
    return { ...state, typeData: payload.data }
  },
}, defaultState)
