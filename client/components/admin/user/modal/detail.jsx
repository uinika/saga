import React from 'react'
import { Modal } from 'antd'

export default React.createClass({
  contextTypes: {
     user: React.PropTypes.object
  },
  handleSubmit() {
    this.context.user.dispatch.userDetailModal(false)
  },
  handleCancel(event) {
    this.context.user.dispatch.userDetailModal(false)
  },
  render() {
    let userInfo = this.context.user.state.detail.target[0]
    if(userInfo){
      var userInfoList = (
        <tbody>
          <tr>
            <td>{userInfo.loginName}</td>
            <td>{userInfo.realName}</td>
          </tr>
          <tr>
            <td>{userInfo.stateName}</td>
            <td>{userInfo.roleNames}</td>
          </tr>
        </tbody>
      )
    }
    return (
      <span>
        <Modal
          title="用户详情"
          visible = {this.context.user.state.detail.modal}
          onOk = {this.handleSubmit}
          onCancel = {this.handleCancel}
        >
          <table>
            {userInfoList}
          </table>
        </Modal>
      </span>
    )
  }
})
