import React from 'react'

import './styles.less'
import HeaderN from '@/components/HeaderN'

function Home(props) {
  const r = () => {
    console.log('r');
  }
  return (
    <div className="pages-home">
      <HeaderN
        isSearch={true}
        lef="ele.me"
        cen="天津"
        rig=""
        rigOnClick={r}
      />
    </div>
  )
}

export default Home
