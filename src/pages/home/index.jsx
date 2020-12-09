import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { connect } from 'react-redux'
import { ShopOutlined } from '@ant-design/icons'

// redux-actions
import homeAc from '@/actions/home'
import {
  lmjfoodTypeList
} from '@/constants/actionTypes'
import './styles.less'
// 组件
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'

export default connect(
  (state) => ({ data: state.home.data }),
  {
    [lmjfoodTypeList]: homeAc[lmjfoodTypeList]
  }
)(Home)
function Home(props) {
  const { data } = props
  useEffect(() => {
    props.foodTypeList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log();
  return (
    <div className="home lmj_home">
      <HeaderN
        isSearch={true}
        cen="天津第三市政公路工程"
      />
      <section>
        <Carousel>
          {
            data.length && Array(data.length / 8).fill(Array(8).fill(1)).map((v, i) => {
              return (
                <div className="lmj_banner" key={i}>
                  {
                    v.map((vv, ii) => {
                      return (
                        <dl key={data[(i + 1) * ii].id}>
                          <dt><img src={"https://fuss10.elemecdn.com" + data[(i + 1) * ii].image_url} alt="" /></dt>
                          <dd>{data[(i + 1) * ii].title}</dd>
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
      </section>
      <FooterN />
    </div>
  )
}

