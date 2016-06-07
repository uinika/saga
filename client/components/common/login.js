import React from 'react';
import ReactDom from 'react-dom';
import { Row, Col, Input } from 'antd';

class Login extends React.Component {
  render() {
    return (
      <div id='login'>
        <Row>
          <Col span={12} offset={6}>
            <Input addonBefore="用户名"/>
            <Input addonBefore="密码"/>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Login;
