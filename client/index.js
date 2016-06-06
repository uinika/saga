import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Row, Col } from 'antd';
import Login from './components/common/login';
import Dashboard from './components/dashboard/main';
import 'antd/dist/antd.min.css';
import './styles/main.less';

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/login" component={Login}>
  	</Route>
    <Route path="/dashboard" component={Dashboard}>
    </Route>
  </Router>
), document.getElementById('app'));
