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

        <Route path='cluster'>
          <Route path='start' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/cluster/start').default)})
          }} />
          <Route path='resource-url' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/cluster/resource-url').default)})
          }} />
          <Route path='install-items' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/cluster/install-items').default)})
          }} />
          <Route path='comfirm-hosts' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/cluster/comfirm-hosts').default)})
          }} />
          <Route path='survey' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/cluster/survey').default)})
          }} />
        </Route>

        <Route path='add-service'>
          <Route path='select-service' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/add-service/select-service').default)})
          }} />
          <Route path='distribute-hosts' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/add-service/distribute-hosts').default)})
          }} />
        <Route path='distribute-node-and-client' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/add-service/distribute-node-and-client').default)})
          }} />
          <Route path='customized-service' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/add-service/customized-service').default)})
          }} />
          <Route path='configuration-identification' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/add-service/configuration-identification').default)})
          }} />
          <Route path='review' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/add-service/review').default)})
          }} />
          <Route path='install-start-test' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/add-service/install-start-test').default)})
          }} />
          <Route path='survey' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/add-service/survey').default)})
          }} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
