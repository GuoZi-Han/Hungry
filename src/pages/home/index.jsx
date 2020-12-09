import React from 'react'
import { Carousel } from 'antd';


import './styles.less'
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'


function Home(props) {
  return (
    <div className="lmj_home">
      <HeaderN />
      <section>
        <Carousel>
          <div className="lmj_banner">
            <dl>
              <dt><img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="" /></dt>
              <dd>甜品饮品</dd>
            </dl>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
        </Carousel>
      </section>
      <FooterN />
    </div>
  )
}
const contentStyle = {
  height: '3.5rem',
  color: '#000',
  textAlign: 'center',
  background: '#364d79',
};

export default Home
