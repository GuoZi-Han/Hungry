import React, { useState, useEffect } from 'react'

import './styles.less'
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'
import { Input, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
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

  const [isBool, setIsBool] = useState('none')
  const [value, setValue] = useState()
  const [data, setData] = useState([])

  useEffect(() => {
    // data.length !== 0 ? setIsBool('block') : setIsBool('none')
  }, [data])

  const searchInput = (e) => {
    setValue(e.target.value)
  }

  const searchClick = ()  => {
    props.searchShop({ geohash: '31.22967,121.4762', keyword: value})
      .then(res => {
        console.log(res.payload.data)
        setData(res.payload.data)
      })
  }

  return (
    <div className="home lmj_home">
      <HeaderN />
      <section className = 'gzh_section'>
        <div className = 'gzh_search_div'>
          <Input 
            placeholder = '请输入商家或美食名称' 
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
        <div className = 'gzh_search_list'>
          <h4>商家</h4>
        </div>
        <div className = 'gzh-title' style = {{ display: isBool }}>
          <h4 className = 'gzh-font'>搜索历史</h4>
          <ul>
            <li>
              <h6>效果演示</h6>
              <CloseOutlined />
            </li>
          </ul>
          <p>清空搜索历史</p>
        </div>
      </section>
      <FooterN />
    </div>
  )
}

