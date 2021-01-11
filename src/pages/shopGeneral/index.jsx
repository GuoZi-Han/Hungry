import React, { useEffect, useState } from 'react'
import { RightOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'

import _ from 'loadsh'

// redux-actions
import shop from '@/actions/shopFeneral'
import Header from '@/components/HeaderN'
import Shopmerch from '@/components/Shopmerch'
import {
  ahshopFEneral,
  ahshopxiang
} from '@/constants/actionTypes'
import './styles.less'

export default connect(
  (state) => {
    return (
      {
        ah_shop: state.shopfener.ah_shopFen,
        webdata: state.shopfener.ah_shopdetail
      }
    )
  },
  {
    [ahshopFEneral]: shop[ahshopFEneral],
    [ahshopxiang]: shop[ahshopxiang]
  }
)(ShopGeneral)
function ShopGeneral(props) {
  const { ah_shop, webdata } = props;
  const [ah_class, setAhclass] = useState(true)
  useEffect(() => {
    const url = _.get(props, 'location.pathname', '/').split(':');
    const url_id = url[1];
    props[ahshopFEneral]('restaurant_id=' + url_id);
    props[ahshopxiang](url_id)
  }, []);
  // const ah_merch=()=>{

  // }
  return (
    <>
      <div><Header /></div>
      <div className='ah-shop-auto'>
        <div>
          <div className='ah-top'>
            <div className='ah-tops'>
              <img
                src={'//elm.cangdu.org/img/' + webdata.image_path}
                alt=""
                style={{
                  width: '68px',
                  height: '68px'
                }}
              />
              <div className='ah-top-auto'>
                <p style=
                  {{ fontSize: '0.35rem', fontWeight: 'bold', marginBottom: '0.1rem' }}
                >
                  {webdata.name}
                </p>
                <p>{webdata.category}</p>
                <p>公告:{webdata.promotion_info}</p>
                <p className='ah-icon'>
                  <RightOutlined />
                </p>
              </div>
            </div>
            <p className='ah-huodong'>
              <span
                style={{
                  backgroundColor: '#' + _.get(webdata, 'activities[0].icon_color', ''),
                  color: 'white',
                  padding: '0 0.03rem',
                  boxSizing: 'border-box'
                }}>{
                  _.get(webdata, 'activities[0].icon_name', '')
                }</span>
              <span
                style={{
                  marginLeft: '0.1rem'
                }}
              >
                {_.get(webdata, 'activities[0].description', '')}
              </span>
              <span
                style={{
                  float: 'right',
                  marginRight: '0.15rem'
                }}
              >
                {_.get(webdata, 'activities', []).length > 0 ? _.get(webdata, 'activities', []).length + '个活动>' : ''}
              </span>
            </p>
          </div>
          <div className='ah-top-banner'>
            <div>
              <span
                className={ah_class ? 'ah-menu' : ''}
                onClick={
                  // ah_merch
                  () => { setAhclass(true) }
                }
              >
                商品
              </span>
            </div>
            <div>
              <span
                className={!ah_class ? 'ah-menu' : ''}
                onClick={
                  // ah_review
                  () => { setAhclass(false) }
                }
              >
                评价
              </span>
            </div>
          </div>
        </div>
        <Shopmerch ah_shop={ah_shop} ah_class={ah_class} />
      </div>
    </>
  )
}
