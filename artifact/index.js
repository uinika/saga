import React from 'react'
import ReactDom from 'react-dom'
/** Redux */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import {unAuthEnter} from './common/permission'
import 'babel-polyfill'
import promiseMiddleware from 'redux-promise'
// import { fetchMiddleware } from './common/middleware'
/** Components */
import Login from './components/login'
import Frame from './components/frame'
/** CSS */
import 'antd/dist/antd.min.css'
import './styles/index.less'
/** Reducer */
import login from './fluxes/login/reducer'
import frame from './fluxes/frame/reducer'
import user from './fluxes/admin/user/reducer'
import log from './fluxes/admin/log/reducer'
import role from './fluxes/admin/role/reducer'

const store = createStore(
  combineReducers({
    routing: routerReducer,
    login,
    frame,
    user,
    log,
    role,
  }),
  compose(
    applyMiddleware(
      thunkMiddleware, promiseMiddleware, routerMiddleware(hashHistory),
      // fetchMiddleware,
    ),
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
      <Route path='/frame' component={Frame} onEnter={unAuthEnter}>
        <Route path='dashboard' getComponent={(nextState, callback) => {
          require.ensure([], (require) => {callback(null, require('./components/dashboard').default)})
        }} />
        <Route path='admin'>
          <Router path='log'>
            <Route path='summary' getComponent={(nextState, callback) => {
              require.ensure([], (require) => {callback(null, require('./components/admin/log/summary').default)})
            }} />
            <Route path='detail/:loginName' getComponent={(nextState, callback) => {
              require.ensure([], (require) => {callback(null, require('./components/admin/log/detail').default)})
            }} />
          </Router>
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
), document.getElementById('app'))
