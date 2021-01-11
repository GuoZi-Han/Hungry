import { handleActions } from 'redux-actions'

import {
    ahshopFEneral,
    ahshopxiang
} from '@/constants/actionTypes'

const defaultState = {
    ah_shopFen: [],
    ah_shopdetail: {}
}

export default handleActions({
    [ahshopFEneral]: (state, { payload }) => {
        console.log(payload.data)
        return { ...state, ah_shopFen: payload.data }
    },
    [ahshopxiang]: (state, { payload }) => {
        console.log(payload.data)
        return { ...state, ah_shopdetail: payload.data }
    }
}, defaultState)