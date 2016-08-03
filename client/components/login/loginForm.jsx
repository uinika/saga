import React from 'react'
import { Row, Col, Form, Input, Button, Radio } from 'antd'
import { Url, Fetch, Validator } from '../../common/http'
import ValidateCode from './validateCode'

export default Form.create({})(
  React.createClass({
    contextTypes: {
      login: React.PropTypes.object.isRequired,
      action: React.PropTypes.object.isRequired,
      dispatch: React.PropTypes.func.isRequired
    },
    componentDidMount() {
      if (sessionStorage.token) {
        sessionStorage.removeItem('token');
      }
    },
    setValidateCodeInterval(){
      // window.test = this.props.getValidateCodeUrl;
      // window.test();
      // setInterval("window.test()", 1000 * 50);
    },
    handleSubmit(event) {
      event.preventDefault();
      this.context.action.launchLogin({
        loginName: this.props.form.getFieldValue('username'),
        password: this.props.form.getFieldValue('password'),
        validateCode: this.props.form.getFieldValue('validateCode')
      })
    },
    render(){
      const { getFieldProps } = this.props.form
      return (
        <span>
          <Form className='pannel' horizontal onSubmit={this.handleSubmit}>
            <article>
              <section className='first'>
                <Form.Item className='username' label='用户名' labelCol={{span: 6}} wrapperCol={{span: 14}}>
                  <Input type='text' placeholder='请输入用户名...' {...getFieldProps('username')} size='large' />
                </Form.Item>
                <Form.Item className='password' label='密&nbsp;&nbsp;&nbsp;&nbsp;码' labelCol={{span: 6}} wrapperCol={{span: 14}}>
                  <Input type='password' placeholder='请输入密码...' {...getFieldProps('password')} size='large' />
                </Form.Item>
                <Form.Item className='validate' label='验证码' labelCol={{span: 6}} wrapperCol={{span: 14}}>
                  <Input className='code' type='text' placeholder='请输入验证码...' {...getFieldProps('validateCode')} size='large' />
                  <ValidateCode />
                </Form.Item>
              </section>
              <section className='second'>
                <Radio>记住密码</Radio>
                <a>重置密码</a>
              </section>
              <section className='third'>
                <Form.Item wrapperCol={{span: 16, offset: 6}} style={{marginTop: 24}}>
                  <Button size='large' htmlType='submit' type='primary'>确定</Button>
                </Form.Item>
              </section>
            </article>
          </Form>
        </span>
      )
    }
  })
)
