import { createActions } from 'redux-actions'

import {
  lmjfoodTypeList
} from '@/constants/actionTypes'
// 请求
import {
  foodTypeList
} from '@/utils/interFaces'

export default createActions({
  [lmjfoodTypeList]: opt => foodTypeList(opt),
})






