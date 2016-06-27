import React from 'react';
import ReactDom from 'react-dom';
import {Row, Col, Form, Input, Button} from 'antd';
import 'whatwg-fetch';
import {Path, Http} from '../../util/http'

let Login = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    let httpParam = {
      loginName: this.props.form.getFieldValue('username'),
      password: this.props.form.getFieldValue('password'),
      validateCode: this.props.form.getFieldValue('validateCode')
    };
    Http({
      url: '/login',
      method: 'POST',
      token: 'uinika',
      param: httpParam
    })
    .then(data => {
      if(data.head.status === 200 && data.head.token){
        sessionStorage.token = data.head.token;
      }
      // Common
     })
  },
  render() {
    const {getFieldProps} = this.props.form;
    return (
      <div id='login'>
        <Row type='flex' align='middle' justify='center'>
          <Col span={7}>
            <Form horizontal onSubmit={this.handleSubmit}>
              <Form.Item>
                <Input type='text' placeholder='用户名' {...getFieldProps('username')} />
              </Form.Item>
              <Form.Item>
                <Input type='password' placeholder='密码' {...getFieldProps('password')} />
              </Form.Item>
              <Form.Item>
                <Input type='text' placeholder='验证码' {...getFieldProps('validateCode')} />
                <img src= {Path + '/validatecode'} />
              </Form.Item>
              <Button htmlType='submit' type='primary'>登陆</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
});

export default Form.create({})(Login);;
