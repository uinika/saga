import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/cluster/action'
import { Form, Button, Input} from 'antd'
import AddClusterName from './addClusterName'

const Types = {
    cluster: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
}

export default connect(
  state => ({cluster: state.cluster}),
  dispatch => ({dispatch, action: bindActionCreators(actionCreators, dispatch)})
)(
  Form.create()(
    React.createClass({
    propTypes: Types,
    childContextTypes: Types,
    getChildContext() {
      return {
        cluster: this.props.cluster,
        action: this.props.action,
        dispatch: this.props.dispatch
      }
    },
    render() {
      return (
        <div id='cluster'>
          <h1>开始</h1>
          <p>集群安装向导将引导你部署一个集群，首先，请为你的集群命名。</p>
          <AddClusterName></AddClusterName>
        </div>
      )
    }
  })
  )
)
