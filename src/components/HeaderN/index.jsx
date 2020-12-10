import React from 'react'
import { LeftOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
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
        if (sessionStorage.getItem('token')) {
            return <UserOutlined />
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
                {
                    props.match.path === "/" ? <span onClick={() => { props.history.push('/SelectCity') }}>{cen}</span> :
                        <span>{cen}</span>
                }

            </div>
            <div className="rig">
                {
                    !rig ? rig : rigFun()
                }
            </div>
        </div>
    )
}

export default withRouter(HeaderN)
