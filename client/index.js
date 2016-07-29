import React from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import 'babel-polyfill'
import Login from './components/login'
import Frame from './components/frame'
import 'antd/dist/antd.min.css'
import './styles/main.less'
import login from './fluxes/login/reducer'
import frame from './fluxes/frame/reducer'
import user from './fluxes/admin/user/reducer'
import log from './fluxes/admin/log/reducer'

const store = createStore(
  combineReducers({
    login,
    frame,
    user,
    log,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunkMiddleware, promiseMiddleware, routerMiddleware(hashHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(hashHistory, store)

ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      {/* Login */}
      <Route path='/' component={Login}>
        <IndexRoute component={Login} />
        <Route path='login' component={Login} />
      </Route>
      {/* Frame */}
      <Route path='/frame' component={Frame}>
        <Route path='dashboard' getComponent={(nextState, callback) => {
          require.ensure([], (require) => {callback(null, require('./components/dashboard').default)})
        }} />
        <Route path='admin'>
          <Route path='log' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/log/overview').default)})
          }} />
          <Route path='menu' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/menu').default)})
          }} />
          <Route path='module' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/module').default)})
          }} />
          <Route path='role' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/role').default)})
          }} />
          <Route path='user' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/user').default)})
          }} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('App'))
