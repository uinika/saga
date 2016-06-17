import React from 'react';
import ReactDom from 'react-dom';
import { Row, Col, Input } from 'antd';
import 'whatwg-fetch';

class Login extends React.Component {
  componentDidMount() {
    fetch('http://172.16.0.119:8080/cors/test').then(function(response) {
      console.log(response);
    })
  };
  render() {
    return (
      <div id='login'>
        <Row>
          <Col span={12} offset={6}>
            <Input addonBefore="用户名"/>
            <Input addonBefore="密  码"/>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Login;
