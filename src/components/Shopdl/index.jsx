import React from 'react'
import { Rate } from 'antd'
import { withRouter } from 'react-router-dom'

import './style.less'

function Shopdl(props) {
    const { data } = props
    const v = { ...data }
    return (
        <dl key={v.id} className="lmj_shop" onClick={() => { props.history.push('/shopGeneral/' + v.id) }}>
            <dt>
                <img src={"//elm.cangdu.org/img/" + v.image_path} alt="" />
            </dt>
            <dd>
                <div className="lmj_ddhead">
                    <p><span>品牌</span><time>{v.name}</time></p>
                    <div><span>保</span><span>准</span><span>票</span></div>
                </div>
                <div className="lmj_ddsec">
                    <div>
                        <Rate allowHalf disabled defaultValue={v.rating} />
                        <span>{v.rating}</span> 月售{v.recent_order_num}单
                      </div>
                    <p>
                        <span>{v.delivery_mode.text}</span>
                        <time>准时达</time>
                    </p>
                </div>
                <div className="lmj_ddsec">
                    <span>￥{v.float_minimum_order_amount}起送/配送费约¥{v.float_delivery_fee}</span>
                    <time>{v.distance} / <span>{v.order_lead_time}</span></time>
                </div>
            </dd>
        </dl>
    )
}

export default withRouter(Shopdl)
