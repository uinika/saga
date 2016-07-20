import React from 'react'
import { connect } from 'react-redux'
import { loginForm, getValidateCode } from '../../actions/login'
import LoginForm from './login-form'

let Login = React.createClass({
  componentDidMount() {

  },
  render() {
    const { dispatch, login, validateCode } = this.props
    return (
      <LoginForm
        onLogin = {
          auth => dispatch(loginForm(auth))
        }
        getValidateCode = {
          path => dispatch(getValidateCode(path))
        }
      />
    )
  }
})

function select(state) {
  return {
    login: state.login,
    path: state.path
  }
}

export default connect(select)(Login)
