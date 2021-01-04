import { createActions } from 'redux-actions'

import {
  lmjfoodTypeList,
  lmjgetShopList,
  lmjGetAllShopList
} from '@/constants/actionTypes'
// 请求
import {
  foodTypeList,
  getShopList,
  getAllShopList
} from '@/utils/interFaces'

export default createActions({
  [lmjfoodTypeList]: opt => foodTypeList(),
  [lmjgetShopList]: opt => getShopList(opt),
  [lmjGetAllShopList]: opt => getAllShopList(opt),
})






