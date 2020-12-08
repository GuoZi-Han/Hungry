import React from 'react'
import { LogoutOutlined, CopyOutlined, CompassOutlined, UserOutlined } from '@ant-design/icons'
import { NavLink, withRouter, Link } from 'react-router-dom'
import _ from 'loadsh'

import "./style.less"

function FooterN(props) {
    // console.log(props.location.pathname);
    // const path = _.get(props, 'props.location.pathname', '/')
    return (
        <div className="FooterN">
            <NavLink to="/">
                <dl>
                    <dt><LogoutOutlined /></dt>
                    <dd>外卖</dd>
                </dl>
            </NavLink>
            <NavLink to="/search">
                <dl>
                    <dt><CompassOutlined /></dt>
                    <dd>搜索</dd>
                </dl>
            </NavLink>
            
            <NavLink to="/indent">
                <dl>
                    <dt><CopyOutlined /></dt>
                    <dd>订单</dd>
                </dl>
            </NavLink>
            
            <NavLink to="/my">
                <dl>
                    <dt><UserOutlined /></dt>
                    <dd>我的</dd>
                </dl>
            </NavLink>
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
