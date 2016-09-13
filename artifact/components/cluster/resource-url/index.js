import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/cluster/action'
import { Button, Input, Icon, Form} from 'antd'
import ResourceUrlTable from './resourceUrlTable'
// const Types = {
//     url: React.PropTypes.object.isRequired,
//     action: React.PropTypes.object.isRequired,
//     dispatch: React.PropTypes.func.isRequired
// }

export default connect(
  //state => ({url: state.url}),
  dispatch => ({dispatch, action: bindActionCreators(actionCreators, dispatch)})
)(
   React.createClass({
     //propTypes: Types,
    //  childContextTypes: Types,
    //  getChildContext() {
    //    return {
    //      url: this.props.url,
    //      action: this.props.action,
    //      dispatch: this.props.dispatch
    //    }
    //  },
    render() {
      return (
        <div id='cluster-rource-url'>
          <h1>资源地址</h1>
          <p>请输入你的离线安装包资源地址。</p>
          <ResourceUrlTable></ResourceUrlTable>
          <Button type='ghost'>返回</Button>
          <Button type='ghost'>下一步</Button>
        </div>
      )
    }
  })
)
