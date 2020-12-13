import { handleActions } from 'redux-actions'

import {
    lmjshopInfo
} from '@/constants/actionTypes'

const defaultState = {
    data: {},
}

export default handleActions({
    [lmjshopInfo]: (state, { payload }) => {
        return { ...state, data: { ...payload.data } }
    },
}, defaultState)