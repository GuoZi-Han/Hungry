import React from 'react'
import { Route } from 'react-router-dom'
import {
  Home,
  Search,
  Order,
  Mine,
  PasswordChanged,
  ResetPassword,
  SelectCity,
  ShopGeneral,
  LocatingCity,
} from '@/router/componens'
import AnimatedRouter from 'react-animated-router';
import './style.css';
export default function Router() {
  return (
    <div>
      <AnimatedRouter>
        <Route path="/resetPassword" component={ResetPassword} />{/* 重置密码页 */}
        <Route path="/locatingCity" component={LocatingCity} />{/* 定位城市页 */}
        <Route path="/shopGeneral" component={ShopGeneral} />{/* 店铺页 */}
        <Route path="/selectCity" component={SelectCity} />{/* 选择城市页 */}
        <Route path="/login" component={PasswordChanged} />{/* 登录页 */}
        <Route path="/search" component={Search} />{/* 搜索页*/}
        <Route path="/indent" component={Order} />{/* 订单页 */}
        <Route path="/my" component={Mine} />{/* 我的页 */}
        <Route exact path="/" component={Home} />{/* 外卖页 */}
      </AnimatedRouter>
    </div>
  )
}
