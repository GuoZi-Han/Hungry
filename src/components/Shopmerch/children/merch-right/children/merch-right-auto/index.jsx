import React from 'react'
import _ from 'loadsh'

import './style.less'
function MerchRightAuto(props) {
    const { v } = props
    return (
        <ul>
            {
                v.foods && v.foods.map(x => {
                    return (
                        <li key={x.item_id} className='ah-merch-li' style={{position: 'relative'}}>
                            {x.attributes[0] !== null ?
                                <div>
                                    <span className='left-top' style={{ borderTopColor: '#'+_.get(x, 'attributes[0].icon_color') }}></span>
                                    <span className='left-zi'>{_.get(x, 'attributes[0].icon_name')}</span>
                                </div> :
                                ''}
                            <img
                                src={'//elm.cangdu.org/img/' + x.image_path}
                                alt=""
                                style={{
                                    width: '1rem',
                                    height: '1rem'
                                }}
                            />
                            <div style={{ flex: 1, marginLeft: '8px', lineHeight: '25px' }}>
                                <p
                                    style={{
                                        fontSize: '.3rem',
                                        color: 'black',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {x.name}
                                </p>
                                <p
                                    style={{
                                        color: '#666'
                                    }}
                                >
                                    {x.description}
                                </p>
                                <p style={{
                                    color: 'black'
                                }}>
                                    {
                                        '月' + x.tips.split('月')[1]
                                    }
                                    <span style={{ marginLeft: '.1rem' }}>
                                        {'好评率' + x.satisfy_rate + '%'}
                                    </span>
                                </p>
                                <p>
                                    {
                                        x.activity ?
                                            <span
                                                style={{
                                                    border: '1px solid #' + x.activity.icon_color,
                                                    color: '#' + x.activity.image_text_color,
                                                    display: 'inline-block',
                                                    height: '13px',
                                                    lineHeight: '10px',
                                                    borderRadius: '8px',
                                                    padding: '0px 2px',
                                                    fontSize: '.2rem'
                                                }}
                                            >
                                                {x.activity.image_text}
                                            </span> :
                                            ''
                                    }
                                </p>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    paddingRight: '8PX',
                                    boxSizing: 'border-box'
                                }}>
                                    <span style={{
                                        color: '#FF6600'
                                    }}>￥<span
                                        style={{
                                            fontSize: '.35rem',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                            {x.specfoods[0].price}
                                        </span></span>
                                    {
                                        _.get(x, 'specifications', []).length > 0 ?
                                            <span className='ah-merch-right-auto-span'>
                                                {_.get(x, 'specifications[0]', []).name}
                                            </span> :
                                            <p className='ah-merch-right-auto-btn'>+</p>
                                    }
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MerchRightAuto
