import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/cluster/start/action'
import { Form, Button, Input} from 'antd'
const Types = {
  //  cluster: React.PropTypes.object.isRequired
}

export default connect(
  state => ({user: state.user}),
  dispatch => ({dispatch, action: bindActionCreators(actionCreators, dispatch)})
)(
  Form.create()(
    React.createClass({
    propTypes: Types,
    childContextTypes: Types,
    // getChildContext() {
    //   return {
    //     cluster: this.props.cluster
    //   }
    handleSubmit(e) {
      e.preventDefault();
      console.log('收到表单值：', this.props.form.getFieldsValue());
    },

    render() {
      const { getFieldProps } = this.props.form
      return (
        <div id='cluster-start'>
          <h1>开始</h1>
          <p>集群安装向导将引导你部署一个集群，首先，请为你的集群命名。</p>
          <span className='form'>
            <Form horizontal onSubmit={this.handleSubmit} >
              <Form.Item label='请命名你的集群'>
                <Input placeholder='' style={{ width:400 }} {...getFieldProps('clusterName')} />
              </Form.Item>
              <Button  type='primary'>下一步</Button>
            </Form>
          </span>

        </div>
      )
    }
  })
  )
)
