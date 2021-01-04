import { handleActions } from 'redux-actions'

import {
    lmjshopInfo,
    lmjShopFoodList
} from '@/constants/actionTypes'

const defaultState = {
    shopInfo: {},
    shopType: []
}

export default handleActions({
    [lmjshopInfo]: (state, { payload }) => {
        return { ...state, shopInfo: { ...payload.data } }
    },
    [lmjShopFoodList]: (state, { payload }) => {
        return { ...state, shopType: [...payload.data] }
    },
}, defaultState)