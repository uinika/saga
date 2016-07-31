import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../../fluxes/admin/log/detail/action'
import Detail from './main'

function mapStateToProps(state, router) {
  return {
    state: state.log.detail,
    pathParam: router.params,
    queryParam: router.location.query
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
          <Detail />
        </div>
      )
    }
  })
)
