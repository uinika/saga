import React from 'react'
import { connect } from 'react-redux'
import { requestUser, responseUser } from '../../../actions/admin/user'
import Main from './main'

function mapStateToProps(state) {
  return {
    userList: state.user.userList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestUser: httpParam => dispatch(requestUser(httpParam))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
