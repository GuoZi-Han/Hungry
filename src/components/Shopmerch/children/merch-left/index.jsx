import React from 'react'

function MerchLeft(props) {
    const { ah_shop } = props
    return (
        <div className='ah-merch-left'>
            {
                ah_shop.map((v, i) => {
                    return (
                        <div key={i} className='ah-merch-left-div'>
                            <span style={{
                                display: 'block',
                                width: '100%',
                                overflow: 'auto'
                            }}><a className='ah-merch-left-a'>{v.name}</a></span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MerchLeft
