import React from 'react'
import { Modal } from 'antd'

export default React.createClass({
  contextTypes: {
    user: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  handleSubmit() {
    this.context.action.detailModal(false)
  },
  handleCancel(event) {
    this.context.action.detailModal(false)
  },
  render() {
    let userInfo = this.context.user.detail.result[0]
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
          visible = {this.context.user.detail.modal}
          onOk = {this.handleSubmit}
          onCancel = {this.handleCancel}
        >
          <table className='detail-table'>
            {userInfoList}
          </table>
        </Modal>
      </span>
    )
  }
})
