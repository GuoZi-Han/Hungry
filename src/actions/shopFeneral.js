import { createActions } from 'redux-actions'

import {
    ahshopFEneral,
    ahshopxiang
} from '@/constants/actionTypes'
// 请求
import {
    getFoodNewList,
    shopInfo
} from '@/utils/interFaces'

export default createActions({
    [ahshopFEneral]: opt => getFoodNewList(opt),
    [ahshopxiang]: opt => shopInfo(opt)
})