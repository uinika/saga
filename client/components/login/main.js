import React from 'react';
import ReactDom from 'react-dom';
import {Row, Col, Form, Input, Button, Radio} from 'antd';
import 'whatwg-fetch';
import {Path, Http} from '../../utils/http'

let Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
      param: httpParam
    })
    .then(data => {
      if(data.head.status === 200 && data.head.token){
        sessionStorage.token = data.head.token;
      }
     })
     .then(() => {
       this.context.router.replace('/main/dashboard');
     })
  },
  render() {
    const {getFieldProps} = this.props.form;
    return (
      <div id='login'>
        <Row className='box' type='flex' align='middle' justify="space-around">
          <Col span={8}>
            <section className='logo'></section>
            <Form className='pannel' horizontal onSubmit={this.handleSubmit}>
              <section>
                <Form.Item label="用户名" labelCol={{span: 6}} wrapperCol={{span: 14}}>
                  <Input type='text' placeholder='请输入用户名...' {...getFieldProps('username')} />
                </Form.Item>
                <Form.Item label="密码" labelCol={{span: 6}} wrapperCol={{span: 14}}>
                  <Input type='password' placeholder='请输入密码...' {...getFieldProps('password')} />
                </Form.Item>
                <Form.Item label="验证码" labelCol={{span: 6}} wrapperCol={{span: 14}}>
                  <Input type='text' placeholder='请输入验证码...' {...getFieldProps('validateCode')} />
                  <img src= {Path + '/validatecode'} />
                  <a>换一张</a>
                </Form.Item>
              </section>
              <section>
                <Form.Item labelCol={{span: 6}} wrapperCol={{span: 14}}>
                  <Radio>记住密码</Radio>
                </Form.Item>
                <Form.Item labelCol={{span: 6}} wrapperCol={{span: 14}}>
                  重置密码
                </Form.Item>
              </section>
              <section>
                <Form.Item wrapperCol={{span: 16, offset: 6}} style={{marginTop: 24}}>
                  <Button htmlType="submit" type="primary">确定</Button>
                </Form.Item>
              </section>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
});

export default Form.create({})(Login);;
