import React from 'react'
import { connect } from 'react-redux'
import { fetchLogin, submitLogin, getValidateCodeUrl } from '../../actions/login'
import Main from './main'

function mapStateToProps(state) {
  return {
    validate_code_url: state.login.validate_code_url
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: info => dispatch(fetchLogin(info)),
    getValidateCodeUrl: () => dispatch(getValidateCodeUrl())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
