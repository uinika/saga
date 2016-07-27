import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Button, Radio } from 'antd'
import { Url, Fetch, Validator } from '../../common/http'
import LoginForm from './login-form'
import * as actionCreators from '../../fluxes/login/action'

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Form.create({})(
    React.createClass({
      childContextTypes: {
        container: React.PropTypes.object
      },
      getChildContext: function() {
        return {
          container: this.props
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
)
