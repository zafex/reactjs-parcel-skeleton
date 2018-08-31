import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '~/store'
import App from '~/App'
import registerServiceWorker from '~/registerServiceWorker'

import 'font-awesome/css/font-awesome.min.css'
import 'simple-line-icons/css/simple-line-icons.css'
import '@coreui/icons/css/coreui-icons.min.css'
import '@coreui/coreui/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui-standalone.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui'
import 'rc-pagination/assets/index.css'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root-app')
)

registerServiceWorker()
