import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Home } from '@/router/componens'

function Root ({ route }) {
  return renderRoutes(route.routes)
}

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        component: Home,
      },
    ]
  }
]

export default function Router () {
  return (
    <BrowserRouter>
      <>
        {/* <h1><Link to="/login">login</Link></h1>
        <h1><Link to="/forms">forms</Link></h1>
        <h1><Link to="/">home</Link></h1> */}
        {renderRoutes(routes)}
      </>
    </BrowserRouter>
  )
}
