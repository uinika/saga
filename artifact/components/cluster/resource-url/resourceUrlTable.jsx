import React from 'react'
import { Button, Input, Icon, Form} from 'antd'
export default React.createClass({
  // contextTypes: {
  //   url:React.PropTypes.object.isRequired,
  //   action: React.PropTypes.object.isRequired,
  //   dispatch: React.PropTypes.func.isRequired
  // },
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：');
    //this.context.action.addResourceUrl();
  },
	render() {
    let st = {
		  width: '700'
		};
		let st2 = {
		  width: '500'
		};
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
              <Input style={st2} placeholder='http://ip:port/HDP/centos7/2.x/updates/2.4.2.0/HDP-2.4.2.0-centos7-rpm.tar.gz'></Input><Icon type="reload"/>重置
            </td>
          </tr>
          <tr>
            <td>HDP-UTIL</td>
            <td>
              <Input style={st2} placeholder='http://ip:port/HDP-UTILS-1.1.0.20/repos/centos7/HDP-UTILS-1.1.0.20-centos7.tar.gz'></Input><Icon type="reload"/>重置
            </td>
          </tr>
				</tbody>
			</table>
      </Form>
		)
	}
});
