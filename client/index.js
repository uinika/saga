import React from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import login from './reducers/login'
import frame from './reducers/frame'
import user from './reducers/user'
import 'antd/dist/antd.min.css'
import './styles/main.less'
import Frame from './components/frame/container'
import Login from './components/login/container'

const store = createStore(
  combineReducers({
    login,
    frame,
    user,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunkMiddleware, routerMiddleware(hashHistory)),
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
          require.ensure([], (require) => {callback(null, require('./components/dashboard/main').default)})
        }} />
        <Route path='admin'>
          <Route path='log' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/log/main').default)})
          }} />
          <Route path='menu' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/menu/main').default)})
          }} />
          <Route path='module' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/module/main').default)})
          }} />
          <Route path='role' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/role/main').default)})
          }} />
          <Route path='user' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {callback(null, require('./components/admin/user/main').default)})
          }} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('App'))
