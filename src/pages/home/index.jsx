import React, { useEffect } from 'react'
import { Carousel, Rate } from 'antd';
import { connect } from 'react-redux'
import { ShopOutlined } from '@ant-design/icons'

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
    props.foodTypeList()
    props.getShopList({ latitude: 31.22967, longitude: 121.4762 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(shopData);
  return (
    <div className="home lmj_home">
      <HeaderN
        isSearch={true}
        cen="天津第三市政公路工程"
        rig
      />
      <section>
        <Carousel>
          {
            navdata.length && Array(navdata.length / 8).fill(Array(8).fill(1)).map((v, i) => {
              return (
                <div className="lmj_banner" key={i}>
                  {
                    v.map((vv, ii) => {
                      return (
                        <dl key={navdata[(i + 1) * ii].id}>
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
            shopData.length && shopData.map((v, i) => {
              if (i > 1) {
                return null
              }
              return (
                <dl key={v.id} className="lmj_shop">
                  <dt>
                    <img src={"//elm.cangdu.org/img/" + v.image_path} alt="" />
                  </dt>
                  <dd>
                    <div className="lmj_ddhead">
                      <p><span>品牌</span><time>{v.name}</time></p>
                      <div><span>保</span><span>准</span><span>票</span></div>
                    </div>
                    <div className="lmj_ddsec">
                      <div>
                        <Rate disabled defaultValue={v.rating} />
                        <span>{v.rating}</span> 月售{v.recent_order_num}单
                      </div>
                      <p>
                        <span>{v.delivery_mode.text}</span>
                        <time>准时达</time>
                      </p>
                    </div>
                    <div className="lmj_ddsec">
                      <span>￥{v.float_minimum_order_amount}起送/配送费约¥{v.float_delivery_fee}</span>
                      <time>{v.distance} / <span>{v.order_lead_time}</span></time>
                    </div>
                  </dd>
                </dl>
              )
            })
          }
        </div>
      </section>
      <FooterN />
    </div>
  )
}

