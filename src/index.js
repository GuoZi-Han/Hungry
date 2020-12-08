import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import 'amfe-flexible'
import store from './store'
import Route from '@/router'
import '@/styles/rem'
import '@/styles/reset.css'
import '@/styles/index.less'
import { Out } from '@/utils/interFaces'

Out().then(res => {
  console.log(res)
})

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Route />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
