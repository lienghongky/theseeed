import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import './assets/styles/main.css';
import './assets/styles/utility.css';
import { Provider } from 'react-redux'
import store from './redux'
import {
  BrowserRouter,
} from 'react-router-dom'

ReactDOM.render(
  
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Provider store = {store}>
        <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
)
