import React from 'react'
import { connect } from 'react-redux'
import { requestMenuTree, responseMenuTree } from '../../actions/frame'

import Main from './main'

function mapStateToProps(state) {
  return {
    menuTree: state.frame.menuTree
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestMenuTree: () => dispatch(requestMenuTree())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
