import React from 'react'
import { Switch, Route } from 'react-router-dom'
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
        <Route path="/login" component={PasswordChanged} />
        <Route path="/search" component={Search} />
        <Route path="/indent" component={Order} />
        <Route path="/my" component={Mine} />
        <Route exact path="/" component={Home} />
      </AnimatedRouter>
    </div>
  )
}
