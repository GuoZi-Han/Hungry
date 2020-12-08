import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '@/router/componens'
export default function Router() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  )
}
