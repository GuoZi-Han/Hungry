import React from 'react'
import { LogoutOutlined, CopyOutlined, CompassOutlined, UserOutlined } from '@ant-design/icons'
import { withRouter} from 'react-router-dom'
import _ from 'loadsh'

import "./style.less"

function FooterN(props) {
    let path = _.get(props, 'location.pathname', '/')
    const fun = (a) => {
        props.history.push(a)
    }
    return (
        <div className="FooterN">
            {/* <Link to="/"> */}
            <dl onClick={() => fun('/')} className={path === "/" ? 'actives' : ''}>
                <dt><LogoutOutlined /></dt>
                <dd>外卖</dd>
            </dl>
            {/* </Link> */}
            {/* <Link to="/search"> */}
            <dl onClick={() => fun('/search')} className={path === "/search" ? 'actives' : ''}>
                <dt><CompassOutlined /></dt>
                <dd>搜索</dd>
            </dl>
            {/* </Link> */}

            {/* <Link to="/indent"> */}
            <dl onClick={() => fun('/indent')} className={path === "/indent" ? 'actives' : ''}>
                <dt><CopyOutlined /></dt>
                <dd>订单</dd>
            </dl>
            {/* </Link> */}

            {/* <NavLink to="/my"> */}
            <dl onClick={() => fun('/my')} className={path === "/my" ? 'actives' : ''}>
                <dt><UserOutlined /></dt>
                <dd>我的</dd>
            </dl>
            {/* </NavLink> */}
            {/* <dl>
                <dt className={path === "/indent" ? 'active' : ''}><CopyOutlined /></dt>
                <dd><Link to="/indent">订单</Link></dd>
            </dl>
            <dl>
                <dt className={path === "/my" ? 'active' : ''}><UserOutlined /></dt>
                <dd><Link to="/my">我的</Link></dd>
            </dl> */}
        </div>
    )
}

export default withRouter(FooterN)
