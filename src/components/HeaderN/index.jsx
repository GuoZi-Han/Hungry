import React from 'react'
import { LeftOutlined, SearchOutlined } from '@ant-design/icons'
import { Link, withRouter } from 'react-router-dom'

import "./style.less"

function HeaderN(props) {
    const { history, cen, isSearch, lef, rig } = props
    const fan = () => {
        history.go(-1)
    }
    const lefFun = () => {
        if (lef) {
            return lef
        } else if (isSearch) {
            return <Link to="/search"><SearchOutlined /></Link>
        } else {
            return <LeftOutlined onClick={fan} />
        }
    }
    const rigFun = () => {
        if (rig) {
            return rig
        } else if (sessionStorage.getItem('token')) {
            return null
        } else {
            return <span><Link to="/login">登录|注册</Link></span>
        }
    }
    return (
        <div className="headerN">
            <div className="lef">
                {lefFun()}
            </div>
            <div className="cen">
                {cen}
            </div>
            <div className="rig">
                {rigFun()}
            </div>
        </div>
    )
}

export default withRouter(HeaderN)
