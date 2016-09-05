import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Button, Radio } from 'antd'
import { Url, Fetch, Validator } from '../../common/http'
import LoginForm from './loginForm'
import * as actionCreators from '../../fluxes/login/action'

const Types = {
  login: React.PropTypes.object.isRequired,
  action: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default connect(
  state => ({login: state.login}),
  dispatch => ({dispatch, action: bindActionCreators(actionCreators, dispatch)})
)(
  React.createClass({
    propTypes: Types,
    childContextTypes: Types,
    getChildContext() {
      return {
        login: this.props.login,
        action: this.props.action,
        dispatch: this.props.dispatch
      }
    },
    render() {
      return (
        <div id='login'>
          <Row className='box' type='flex' align='middle' justify='space-around'>
            <Col span={24}>
              <header className='logo'></header>
              <LoginForm />
            </Col>
          </Row>
        </div>
      )
    }
  })
)
