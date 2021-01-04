import React, { useEffect, useState } from 'react'
import HeaderN from '@/components/HeaderN'
import { RightOutlined } from '@ant-design/icons'
import { geCityList } from '@/utils/interFaces'
import './styles.less'

function SelectCity (props) {

  const [hotCity, setHotCity] = useState([])
  const [allCity, setAllCity] = useState([])
  const [caseArr, setCaseArr] = useState([]) 

  useEffect(() => {
    geCityList({ type: 'hot' })
      .then(res => {
        setHotCity(res.data)
      })
    geCityList({ type: 'group' })
      .then(res => {
        const a = Object.keys(res.data)
        setCaseArr(a.sort())
        setAllCity(res.data)
      })
  }, [])
  return (
    <div className = 'gzh_selectCity home'>
        <HeaderN lef = "ele.me" rig/>
        <section>
          <ul className = 'gzh_nowCity'>
            <li>当前定位城市</li>
            <li>定位不准时，请在城市列表中选择</li>
          </ul>
          <ul className = 'gzh_selectCity'>
            <li style = {{color: '#3190e8'}}>天津</li>
            <li><RightOutlined style = {{color: '#9f9f9f'}}/></li>
          </ul>
          <div className = 'gzh_hotCity'>
            <h4>热门城市</h4>
            <ul>
              {
                hotCity.map(v => {
                  return (
                    <li key = { v.id }>{ v.name }</li>
                  )
                })
              }
            </ul>
          </div>
          {
            caseArr.length && caseArr.map((v, i) => {
              return (
                <div className = 'gzh_allCity' key = { i }>
                  <h4>{ v }</h4>
                  <ul>
                    {
                      caseArr.length && caseArr.map((vv, i) => {
                        if(!allCity[vv]) return null
                        return (
                            allCity[vv].map((v1, i)=> {
                              // console.log(v1)
                              return <li key = { i }>{ v1.name }</li>
                            })
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </section>
    </div>
  )
}

export default SelectCity
