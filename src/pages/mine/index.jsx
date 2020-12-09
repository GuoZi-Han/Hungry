import React, { useState } from 'react'

import './styles.less'
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'

function Mine(props) {
  const [headline, setHeadline] = useState('我的')
  const [headportrait, setHeadportrait] = useState('/img/headportrait.jpg')
  return (
    <div className="lmj_home">
      <HeaderN cen={headline} />
      <section className="gc_section">
        <div>
            <div>
                <div>
                  <img src={headportrait}/>
                </div>
            </div>
            <div>
                <span></span>
                <span></span>
            </div>
            <div>

            </div>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>

      </section>
      <FooterN />
    </div>
  )
}

export default Mine
