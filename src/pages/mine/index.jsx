import React from 'react'


import './styles.less'
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'

function mine(props) {

  return (
    <div className="lmj_home">
      <HeaderN />
      <section>
        我的页
      </section>
      <FooterN />
    </div>
  )
}

export default mine