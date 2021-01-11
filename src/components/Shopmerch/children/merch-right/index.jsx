import React from 'react'

import MerchRightAuto from './children/merch-right-auto'
function MerchRight(props) {
    const { ah_shop } = props
    return (
        <div className='ah-merch-right'>
            {
                ah_shop.map(v => {
                    return (
                        <div key={v.id}>
                            <p style={{
                                background: '#f5f5f5',
                                height: '1rem',
                                lineHeight: '1rem'
                            }}
                                key={v.id}
                            >
                                <span
                                    style={{
                                        marginLeft: '.15rem',
                                        marginRight: '.1rem',
                                        fontSize: '.3rem',
                                        fontWeight: 'bold',
                                        color: '#666',
                                    }}
                                >
                                    {v.name}
                                </span>
                                <span style={{ color: '#666' }}>
                                    {v.description}
                                </span>
                            </p>
                            <MerchRightAuto v={v} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MerchRight
