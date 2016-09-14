import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/cluster/action'
import { Button, Input, Icon, Form} from 'antd'
import ResourceUrlTable from './resourceUrlTable'
const Types = {
    cluster: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
}

export default connect(
  state => ({cluster: state.cluster}),
  dispatch => ({dispatch, action: bindActionCreators(actionCreators, dispatch)})
)(
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
        <div id='cluster-rource-url'>
          <h1>资源地址</h1>
          <p>请输入你的离线安装包资源地址。</p>
          <ResourceUrlTable></ResourceUrlTable>
        </div>
      )
    }
  })
)
