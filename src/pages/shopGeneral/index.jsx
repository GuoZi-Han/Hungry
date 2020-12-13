import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { lmjshopInfo } from '@/constants/actionTypes'

import './styles.less'
import ShopGeneralAc from '@/actions/shopGeneral'

export default connect(
  (state) => ({ shopGeneral: state.shopGeneral.data }),
  {
    [lmjshopInfo]: ShopGeneralAc[lmjshopInfo]
  }
)(ShopGeneral)
function ShopGeneral(props) {
  useEffect(() => {
    const shopId = props.location.search.split('?')[1].split('=')[1]
    if (shopId) {
      props.lmjshopInfo(shopId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(props.shopGeneral);
  return (
    <div>
      店铺页
    </div>
  )
}


