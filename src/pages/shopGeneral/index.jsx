import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  lmjshopInfo,
  lmjShopFoodList
} from '@/constants/actionTypes'

import './styles.less'
import ShopGeneralAc from '@/actions/shopGeneral'

export default connect(
  (state) => ({
    shopInfo: state.shopGeneral.shopInfo,
    shopType: state.shopGeneral.shopType,
  }),
  {
    [lmjshopInfo]: ShopGeneralAc[lmjshopInfo],
    [lmjShopFoodList]: ShopGeneralAc[lmjShopFoodList],
  }
)(ShopGeneral)
function ShopGeneral(props) {
  useEffect(() => {
    const shopId = props.location.search.split('?')[1].split('=')[1]
    if (shopId) {
      // 店铺信息
      props.lmjshopInfo(shopId)
    }
    // 商品分类
    props.lmjShopFoodList(shopId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(props);
  return (
    <div>
      店铺页
    </div>
  )
}


