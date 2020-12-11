import { createActions } from 'redux-actions'

import {
    gzhSearchShop,
    gzhHistoryArray
} from '@/constants/actionTypes'
// 请求
import {
  searchShop
} from '@/utils/interFaces'

export default createActions({
  [gzhSearchShop]: opt => searchShop(opt),
  [gzhHistoryArray]: opt => opt
})






