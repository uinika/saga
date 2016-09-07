import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/cluster/resource-url/action'
import { Table, Button, Input} from 'antd'
const Types = {
  //  cluster: React.PropTypes.object.isRequired
}

export default connect(
  state => ({user: state.user}),
  dispatch => ({dispatch, action: bindActionCreators(actionCreators, dispatch)})
)(
  React.createClass({
    // propTypes: Types,
    // childContextTypes: Types,
    // getChildContext() {
    //   return {
    //     cluster: this.props.cluster
    //   }
    // handleSubmit(e) {
    //   e.preventDefault();
    //   console.log('收到表单值：', this.props.form.getFieldsValue());
    // },



    // const columns = [{
    //   title: '资源名称',
    //   dataIndex: 'name'
    // }, {
    //   title: '资源地址',
    //   dataIndex: 'address'
    // }],
    //
    // const data = [{
    //   key: '1',
    //   name: 'HDP',
    //   address: 'http://ip:port/HDP/centos7/2.x/updates/2.4.2.0/HDP-2.4.2.0-centos7-rpm.tar.gz'
    // }, {
    //   key: '2',
    //   name: 'HDP-UTIL',
    //   address: 'http://ip:port/HDP-UTILS-1.1.0.20/repos/centos7/HDP-UTILS-1.1.0.20-centos7.tar.gzs'
    // }],
    render() {
      return (
        <div id='cluster-start'>
          <h1>资源地址</h1>
          <p>请输入你的离线安装包资源地址。</p>
          {/*<Table
            columns={columns}
            dataSource={data}
          />*/}
        </div>
      )
    }
  })
)
