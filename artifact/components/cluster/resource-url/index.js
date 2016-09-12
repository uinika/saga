import React from 'react'
import { Button, Input, Icon} from 'antd'
export default React.createClass({
  render() {
    return (
      <div id='cluster-rource-url'>
        <h1>资源地址</h1>
        <p>请输入你的离线安装包资源地址。</p>
        <table>
          <thead>
            <tr>
              <th>资源名称</th>
              <th style={{width: '700'}}>资源地址</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HDP</td>
              <td>
                <Input style={{width: '500'}} placeholder='http://ip:port/HDP/centos7/2.x/updates/2.4.2.0/HDP-2.4.2.0-centos7-rpm.tar.gz'></Input><Icon type="reload"/>
                {/*<Button type='ghost'>重置</Button>*/}重置
              </td>
            </tr>
            <tr>
              <td>HDP-UTIL</td>
              <td>
                <Input style={{width: '500'}} placeholder='http://ip:port/HDP-UTILS-1.1.0.20/repos/centos7/HDP-UTILS-1.1.0.20-centos7.tar.gz'></Input><Icon type="reload"/>
                {/*<Button type='ghost'>重置</Button>*/}重置
              </td>
            </tr>
          </tbody>
        </table>
        <Button type='ghost'>返回</Button>
        <Button type='ghost'>下一步</Button>
      </div>
    )
  }
})
