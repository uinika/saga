import React from 'react'
import ReactDom from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory, ndexRoute, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import reducers from './reducers/index'
import 'antd/dist/antd.min.css'
import './styles/main.less'
import Main from './components/main/main'
import Login from './components/login/main'

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      {/* Login */}
      <Route path='/' component={Login}>
        <IndexRoute component={Login} />
        <Route path='login' component={Login} />
      </Route>
      {/* Main */}
      <Route path='/main' component={Main}>
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
