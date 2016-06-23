import React from 'react';
import ReactDom from 'react-dom';
import { Row, Col, Form, Input, Button } from 'antd';
import 'whatwg-fetch';

class Login extends React.Component {
  componentDidMount() {
    fetch('http://172.16.0.119:8080/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        loginName: 'test',
        password: '123456'
      })
    })
    .then(result => result.json())
    .then(data => console.log(data));
  };
  render() {
    return (
      <div id='login'>
        <Row type='flex' align='middle' justify='center'>
          <Col span={6}>
            <Form horizontal>
              <Form.Item>
                <Input type='text' placeholder='用户名' />
              </Form.Item>
              <Form.Item>
                <Input type='password' placeholder='密码' />
              </Form.Item>
              <Button type="primary">登陆</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Login;
