import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../../fluxes/admin/log/summary/action'
import Main from './main'

function mapStateToProps(state) {
  return {
    state: state.log.summary
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
      log: React.PropTypes.object
    },
    getChildContext: function() {
      return {
        log: this.props
      }
    },
    render() {
      return (
        <div id = 'admin-user-list' className = 'wiserv-ui'>
          <Main />
        </div>
      )
    }
  })
)
