import '@babel/polyfill'
import 'webrtc-adapter'
import App from './containers/App'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'

console.log('index')
console.log('index')
console.log('index')
console.log('index')

const component = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(component, document.getElementById('container'))
