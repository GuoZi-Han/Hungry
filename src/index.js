import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import store from './store'
import Rouer from '@/router'
import '@/styles/rem'
import '@/styles/reset.css'
import '@/styles/index.less'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <BrowserRouter>
        <Rouer />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
