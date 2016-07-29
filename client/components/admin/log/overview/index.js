import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../../fluxes/admin/log/overview/action'
import List from './main'

function mapStateToProps(state) {
  return {
    state: state.logList
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
      logList: React.PropTypes.object
    },
    getChildContext: function() {
      return {
        logList: this.props
      }
    },
    render() {
      return (
        <div id = 'admin-user-list' className = 'wiserv-ui'>
          <List />
        </div>
      )
    }
  })
)
