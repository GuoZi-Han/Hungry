import React, { useEffect } from 'react'
import { Carousel, Spin } from 'antd';
import { connect } from 'react-redux'
import { ShopOutlined } from '@ant-design/icons'
import qs from 'qs'

// redux-actions
import homeAc from '@/actions/home'
import {
  lmjfoodTypeList,
  lmjgetShopList
} from '@/constants/actionTypes'
import './styles.less'
// 组件
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'
import Shopdl from '@/components/Shopdl';

export default connect(
  (state) => ({
    navdata: state.home.navdata,
    shopData: state.home.shopData,
  }),
  {
    [lmjfoodTypeList]: homeAc[lmjfoodTypeList],
    [lmjgetShopList]: homeAc[lmjgetShopList],
  }
)(Home)
function Home(props) {
  const { navdata, shopData } = props
  useEffect(() => {
    if (!navdata.length) {
      props.foodTypeList()
      props.getShopList({ latitude: 31.22967, longitude: 121.4762 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const ScreeningOfGoods = (val) => {
// <<<<<<< HEAD
//     props.history.push('/screeningOfGoods?title=' + val.title)
    // console.log(val,{ latitude: 31.22967, longitude: 121.4762 });
    props.history.push('/screeningOfGoods?' + qs.stringify({ title: val.title, latitude: 31.22967, longitude: 121.4762 }))
  }
  return (
    <div className="home">
      <HeaderN
        isSearch={true}
        cen="天津第三市政公路工程"
        rig
      />
      <section className="lmj_sec">
        <Carousel>
          {
            navdata.length && Array(navdata.length / 8).fill(Array(8).fill(1)).map((v, i) => {
              return (
                <div className="lmj_banner" key={i}>
                  {
                    v.map((vv, ii) => {
                      return (
                        <dl
                          onClick={() => ScreeningOfGoods(navdata[(i + 1) * ii])}
                          key={navdata[(i + 1) * ii].id}>
                          <dt><img src={"https://fuss10.elemecdn.com" + navdata[(i + 1) * ii].image_url} alt="" /></dt>
                          <dd>{navdata[(i + 1) * ii].title}</dd>
                        </dl>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
        <div className="lmj_separate"></div>
        <div className="lmj_address_shop"><ShopOutlined />  附近商家</div>
        <div className="lmj_shopList">
          {
            shopData.length ? shopData.map((v, i) => {
              return (
                <Shopdl data={v} key={v.id}></Shopdl>
              )
            }) : <div style={{textAlign:'center'}}><Spin /></div>
          }
        </div>
      </section>
      <FooterN />
    </div>
  )
}

