import React from 'react'
import { Button, Input, Icon, Form} from 'antd'
export default Form.create({})(
  React.createClass({
    contextTypes: {
      cluster:React.PropTypes.object.isRequired,
      action: React.PropTypes.object.isRequired,
      dispatch: React.PropTypes.func.isRequired
    },
    handleSubmitBack(e) {
      e.preventDefault();
      console.log('后退');
      const httpParam = this.props.form.getFieldsValue();
      this.context.action.addResourceUrl(httpParam);
      this.context.action.addResourceUrlBack(this.context.dispatch);
    },
    handleSubmitNext(e) {
      e.preventDefault();
      console.log('下一步');
      const httpParam = this.props.form.getFieldsValue();
      this.context.action.addResourceUrl(httpParam);
      this.context.action.addResourceUrlNext(this.context.dispatch);
    },
  	render() {
      let st = {  width: 700 };
  		let st2 = { width: 500 };
      const { getFieldProps } = this.props.form
      const target = this.context.cluster.select.result2
  		return (
        <Form horizontal onSubmit={this.handleSubmit}>
          <table>
    				<thead>
    					<tr style={st}>
    						<td>资源名称</td>
    						<td >资源地址</td>
    					</tr>
    				</thead>
  				<tbody>
            <tr>
              <td>HDP</td>
              <td>
                <Form.Item >
                  <Input placeholder='' style={st2}  {...getFieldProps('clusterHDPUrl',{initialValue:target.clusterHDPUrl})} /><Icon type="reload"/>重置
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td>HDP-UTIL</td>
              <td>
                <Form.Item >
                  <Input placeholder='' style={st2}  {...getFieldProps('clusterHDPUTTLUrl',{initialValue:target.clusterHDPUTTLUrl})} /><Icon type="reload"/>重置
                </Form.Item>
              </td>
            </tr>
  				</tbody>
  			</table>
        <Button  onClick={this.handleSubmitBack}>返回</Button>
        <Button  onClick={this.handleSubmitNext}>下一步</Button>
        </Form>
  		)
  	}
  })
)
