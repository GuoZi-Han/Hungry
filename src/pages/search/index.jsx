import React, { useState, useEffect } from 'react'

import './styles.less'
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'
import { Input, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import _ from 'lodash'
// 搜索action
import searchActions from '@/actions/search'
// 引入命名
import {
  gzhSearchShop
} from '@/constants/actionTypes'

// redux
export default connect(
  (state) => ({ data: state }),
  {
    [gzhSearchShop]: searchActions[gzhSearchShop]
  }
)(Search)

function Search(props) {
  // 定义数据
  const [isBool, setIsBool] = useState('none')
  const [gzh_bool, setGhz_bool] = useState('none')
  const [value, setValue] = useState()
  const [data, setData] = useState([])
  const [history_data, setHistory_data] = useState([])
  const [history_Array, setHistory_Array] = useState([])
  //  调用生命周期 监听数据
  useEffect(() => {
    // 判断数组长度
    data.length !== 0 ? setGhz_bool('block') : setGhz_bool('none')
    //判断数组长度以及value值是否符合要求
    if (data.length && value === '') {
      // 设置显示隐藏
      setIsBool('block')
      setGhz_bool('none')
    } else {
      // 隐藏盒子
      setIsBool('none')
    }
  }, [data, value, history_Array])

  // 输入框onchange事件
  const searchInput = (e) => {
    setValue(e.target.value)
    // 值为空 清除数据
    if(value === ''){
      setData([])
    }
  }
  // 点击提交按钮事件
  const searchClick = ()  => {
    if (sessionStorage.getItem('historyArray')) {
      history_data.push(value)
      sessionStorage.setItem('historyArray',JSON.stringify(history_data))
      setHistory_Array(history_data)
    } else {
      const arr = sessionStorage.getItem('historyArray')
      const historyBool = arr.some(v => {
        return v === value
      })
      if (!historyBool) {
        arr.push(value)
        sessionStorage.setItem('historyArray',arr)
        setHistory_Array(arr)
      }
    }
    // 请求数据 
    props.searchShop({ geohash: '31.22967,121.4762', keyword: value})
      .then(res => {
        console.log(res.payload.data)
        if (res.payload.data.length > 0) {
          setData(res.payload.data)
        } else {
          setData([])
        }
      })
  }
  // 删除单条历史记录
  const delHistoryArray = (item) => {
    let history_array = _.get(JSON.parse(sessionStorage.getItem('historyArray')),[])
    if (history_array.length !== 0) {
      history_array = history_array.filter(v => {
        return v !== item
      })
      sessionStorage.setItem('historyArray', history_array)
      setHistory_Array(history_array)
    } else {
      sessionStorage.setItem('historyArray', [])
      setHistory_Array(history_array)
    }
  }

  return (
    <div className="home lmj_home">
      <HeaderN />
      <section className = 'gzh_section'>
        <div className = 'gzh_search_div'>
          <Input
            placeholder="请输入商家或美食名称"
            allowClear 
            value = { value }
            onChange = { searchInput } 
          />
          <Button 
            type = 'primary' 
            className = 'gzh_search_button'
            onClick = { searchClick }
          >
            提交
          </Button>
        </div>
        <div className = 'gzh_search_list' style = {{ display: gzh_bool }} >
          <h4>商家</h4>
          <ul className = 'gzh_show_list'>
            {
              data.map((v, i) => {
                return (
                  <li key = { i }>
                    <dl>
                      <dt><img src = { `//elm.cangdu.org/img/${ v.image_path }` } /></dt>
                      <dd>
                        <p>
                          <font>{v.name}</font>
                          <font className = 'svg'>
                            <span style = {{fontSize: '0.1rem'}}>支付</span>
                          </font>
                        </p>
                        <p>月售<span>{ v.recent_order_num }</span>单</p>
                        <p> <span>{ v.float_minimum_order_amount }</span> 元起送 <span>/</span> 距离{ v.distance }</p>
                      </dd>
                    </dl>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className = 'gzh-title' style = {{ display: isBool }}>
          <h4 className = 'gzh-font'>搜索历史</h4>
          <ul>
            {
              history_Array.map((v, i) => {
                return (
                  <li key = { i }>
                    <h6>{ v }</h6>
                    <CloseOutlined onClick = { () => delHistoryArray(v) }/>
                  </li>
                )
              })
            }
          </ul>
          <p>清空搜索历史</p>
        </div>
      </section>
      <FooterN />
    </div>
  )
}

