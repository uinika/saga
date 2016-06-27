import React from 'react';
import ReactDom from 'react-dom';
import {Row, Col, Form, Input, Button} from 'antd';
import 'whatwg-fetch';
import {Path} from './util'

class Login extends React.Component {
  handleSubmit(event) {
    console.log(Path());
    event.preventDefault();
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
    .then(data => {
      if(data.head.status === 200 && data.head.token){
        sessionStorage.token = data.head.token;
      }
      // Common
     })
     .then(() => {
       window.location.href = 'http://172.16.0.93:5000/#/dashboard';
     })
  };
  render() {
    return (
      <div id='login'>
        <Row type='flex' align='middle' justify='center'>
          <Col span={7}>
            <Form horizontal onSubmit={this.handleSubmit}>
              <Form.Item>
                <Input type='text' placeholder='用户名' />
              </Form.Item>
              <Form.Item>
                <Input type='password' placeholder='密码' />
              </Form.Item>
              <Button htmlType='submit' type='primary'>登陆</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  };
};

export default Form.create({})(Login);;
