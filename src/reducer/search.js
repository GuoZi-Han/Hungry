import { handleActions } from 'redux-actions'

import {
    gzhSearchShop,
    gzhHistoryArray
} from '@/constants/actionTypes'

const defaultState = {
  data: [],
  search_arr: []
}

export default handleActions({
  [gzhSearchShop]: (state, { payload }) => {
    return { ...state, data: payload.data }
  },
  [gzhHistoryArray]: (state, { payload }) => {
    let arr = [...state.search_arr]
    if (arr.length) {

    }
    const isBool = arr.some(v => {
      return v === payload
    })
    if (!isBool) {
      arr.push(payload)
    }
    console.log(arr,9)
    return { ...state, search_arr: arr }
  }
}, defaultState)
