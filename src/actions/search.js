import { createActions } from 'redux-actions'

import {
    gzhSearchShop
} from '@/constants/actionTypes'
// 请求
import {
  searchShop
} from '@/utils/interFaces'

export default createActions({
  [gzhSearchShop]: opt => searchShop(opt),
})






