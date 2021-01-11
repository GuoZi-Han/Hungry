import React from 'react'

import MerchLeft from '@/components/Shopmerch/children/merch-left'
import MerchRight from '@/components/Shopmerch/children/merch-right'
function Shopmerch(props) {
    const { ah_class, ah_shop } = props
    return (
        <div className='ah-merch-auto'>
            {
                //判断选项卡
                ah_class ?
                    //商品
                    <div style={{ height: '100%' }}>
                        <MerchLeft ah_shop={ah_shop} />
                        <MerchRight ah_shop={ah_shop} />
                    </div>:
                    //评价
                    ''
            }
        </div>
    )
}

export default Shopmerch
