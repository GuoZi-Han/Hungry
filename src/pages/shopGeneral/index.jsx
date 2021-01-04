import React, { useEffect } from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import _ from 'loadsh'

// redux-actions
import shop from '@/actions/shopFeneral'
import Header from '@/components/HeaderN'
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
  useEffect(() => {
    const url = _.get(props, 'location.pathname', '/').substr(1).split('/');
    const url_id = url[1];
    props[ahshopFEneral]('restaurant_id=' + url_id);
    props[ahshopxiang](url_id)
  }, []);
  return (
    <>
      <div><Header /></div>
      <div>
        <div className='ah-top'>
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
          </div>
        </div>
        <div className='ah-top-banner'>
            <div>商品</div>
            <div>评价</div>
        </div>
        {
          ah_shop.map(v => {
            return <p key={v.name}>{v.name}</p>
          })
        }
      </div>
    </>
  )
}
