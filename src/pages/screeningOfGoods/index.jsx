import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { CaretDownOutlined } from '@ant-design/icons'

import './styles.less'
import homeAc from '@/actions/home'
import {
  lmjgetShopList
} from '@/constants/actionTypes'
import HeaderN from '@/components/HeaderN'
import Shopdl from '@/components/Shopdl'
import ModalN from '@/components/ModalN'

export default connect(
  (state) => ({ shopData: state.home.shopData }),
  {
    [lmjgetShopList]: homeAc[lmjgetShopList]
  }
)(ScreeningOfGoods)
function ScreeningOfGoods(props) {
  const [type] = useState(
    decodeURIComponent(props.location.search).split('?')[1].split('=')[1] ?
      decodeURIComponent(props.location.search).split('?')[1].split('=')[1] : ""
  )
  const [typeTxt, setTypeTxt] = useState(type)
  const [bool1, setBool1] = useState("")
  const [bool2, setBool2] = useState("")
  const [bool3, setBool3] = useState("")
  // const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!props.shopData.length) {
      (async () => { await props.getShopList({ latitude: 31.22967, longitude: 121.4762 }) })()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // 数据过滤
  const shopDataFilter = () => {
    const data = [...props.shopData]
    return data
  }
  // 导航三角动画和模态框是否显示
  const navFun = (val) => {
    if (val === 1) {
      if (bool1 === "" || bool1 === "2") {
        setTypeTxt('分类')
        setBool1("1")
        if (bool2 === "1") setBool2("2")
        if (bool3 === "1") setBool3("2")
      } else {
        setBool1("2")
        setTypeTxt(type)
      }
      return
    } else if (val === 2) {
      if (bool2 === "" || bool2 === "2") {
        setBool2("1")
        if (bool1 === "1") {
          setBool1("2")
          setTypeTxt(type)
        }
        if (bool3 === "1") setBool3("2")
      } else {
        setBool2("2")
      }
      return
    } else {
      if (bool3 === "" || bool3 === "2") {
        setBool3("1")
        if (bool1 === "1") {
          setBool1("2")
          setTypeTxt(type)
        }
        if (bool2 === "1") setBool2("2")
      } else {
        setBool3("2")
      }
    }
  }
  return (
    <div className="lmj_ScreeningOfGoods home">
      <HeaderN cen={type} />
      <div className="lmj_NavFun">
        <div onClick={() => navFun(1)} className={"navOn" + bool1}>
          {typeTxt}
          <CaretDownOutlined />
        </div>
        <div onClick={() => navFun(2)} className={"navOn" + bool2}>
          排序
          <CaretDownOutlined />
        </div>
        <div onClick={() => navFun(3)} className={"navOn" + bool3}>
          筛选
          <CaretDownOutlined />
        </div>
      </div>
      <section className="lmj_ModalSec">
        <div>
          {
            shopDataFilter().length ? shopDataFilter().map((v, i) => {
              return (
                <Shopdl data={v} key={v.id}></Shopdl>
              )
            }) : "暂无"
          }
        </div>
        {/* <ModalN>
          <p>123456</p>
          <p>123456</p>
          <p>123456</p>
          <p>123456</p>
          <p>123456</p>
          <p>123456</p>
        </ModalN> */}
      </section>
    </div>
  )
}

