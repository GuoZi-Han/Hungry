import { createActions } from 'redux-actions'
import { shopInfo } from '@/utils/interFaces'
import { lmjshopInfo } from '@/constants/actionTypes'

export default createActions({
    [lmjshopInfo]: payload => shopInfo(payload)
})