import { createActions } from 'redux-actions'

import {
  lmjfoodTypeList,
  lmjgetShopList
} from '@/constants/actionTypes'
// 请求
import {
  foodTypeList,
  getShopList
} from '@/utils/interFaces'

export default createActions({
  [lmjfoodTypeList]: opt => foodTypeList(),
  [lmjgetShopList]: opt => getShopList(opt),
})






