import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/admin/log/action'
import Detail from './main'

function mapStateToProps(state) {
  return {
    state: state.logDetail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  React.createClass({
    childContextTypes: {
      logDetail: React.PropTypes.object
    },
    getChildContext: function() {
      return {
        logDetail: this.props
      }
    },
    render() {
      return (
        <div id = 'admin-user-detail' className = 'wiserv-ui'>
          <List />
          <Detail />
        </div>
      )
    }
  })
)
