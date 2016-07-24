import React from 'react'
import { connect } from 'react-redux'
import { findUser } from '../../../actions/admin/user'
import Main from './main'

function mapStateToProps(state) {
  return {
    users: state.user.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    findUser: httpParam => dispatch(findUser(httpParam))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
