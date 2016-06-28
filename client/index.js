import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'antd/dist/antd.min.css';
import './styles/main.less';
import Main from './components/main';
import Login from './components/common/login';

ReactDom.render((
  <Router history={hashHistory}>
    <Route path='/' component={Login}>
      <IndexRoute component={Login} />
      <Route path='login' component={Login} />
    </Route>
    <Route path='main' component={Main}>
      <Route path='dashboard' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {callback(null, require('./components/dashboard/main'))})
      }} />
    </Route>
  </Router>
), document.getElementById('App'));
