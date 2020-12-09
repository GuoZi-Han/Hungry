import React, { useState } from 'react'

import './styles.less'
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'
import { Input, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

function Search(props) {

  const [isBool, setIsBool] = useState('none')
  const 

  return (
    <div className="home lmj_home">
      <HeaderN />
      <section className = 'gzh_section'>
        <div className = 'gzh_search_div'>
          <Input placeholder = '请输入商家或美食名称'/>
          <Button type = 'primary' className = 'gzh_search_button'>提交</Button>
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

export default Search
