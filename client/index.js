import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Row, Col } from 'antd';
import Menus from './components/common/menus';
import Head from './components/common/head';
import Foot from './components/common/foot';
import Dashboard from './components/dashboard/main';
import 'antd/style/index.less';

const App = React.createClass({
  render() {
    return (
      <div>
        <Row>
          <Col span="24"><Head /></Col>
        </Row>
        <Row>
          <Col span="4"><Menus /></Col>
          <Col span="18">{this.props.children}</Col>
        </Row>
        <Row>
          <Col span="24"><Foot /></Col>
        </Row>
      </div>
    )
  }
})

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path='dashboard' name='Dashboard' component={Dashboard} />
      <Route path="demo" name="Demo" getComponent={(location, callback) => {
        require([],()=>{callback(null,require('./components/demo/main'))})
      }}/>
    </Route>
  </Router>
), document.getElementById('app'));
