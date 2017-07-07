import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import Splash from './Splash'
import { unregister } from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
unregister()
