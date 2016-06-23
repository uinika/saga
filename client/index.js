import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Row, Col } from 'antd';
import 'antd/dist/antd.min.css';
import './styles/main.less';

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/login" getComponent={(nextState, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./components/common/login').default)
      })
    }} />
    <Route path="/dashboard" getComponent={(nextState, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./components/dashboard/main').default)
      })
    }} />
  </Router>
), document.getElementById('app'));
