import { createActions } from 'redux-actions'
import {
    shopInfo,
    getFoodNewList
} from '@/utils/interFaces'
import {
    lmjshopInfo,
    lmjShopFoodList
} from '@/constants/actionTypes'

export default createActions({
    [lmjshopInfo]: payload => shopInfo(payload),
    [lmjShopFoodList]: payload => getFoodNewList({restaurant_id:payload}),
})