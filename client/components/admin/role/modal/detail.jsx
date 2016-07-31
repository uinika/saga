import React from 'react'
import { Modal } from 'antd'

export default React.createClass({
  contextTypes: {
     role: React.PropTypes.object
  },
  handleSubmit() {
    this.context.role.dispatch.roleDetailModal(false)
  },
  handleCancel(event) {
    this.context.role.dispatch.roleDetailModal(false)
  },
  render() {
    let roleInfo = this.context.role.state.detail.target[0]
    if(roleInfo){
      var roleInfoList = (
        <tbody>
          <tr>
            <td>{roleInfo.accountNames}</td>
            <td>{roleInfo.listRole}</td>
          </tr>
          <tr>
            <td>{roleInfo.roleName}</td>
            <td>
              <div>{roleInfo.moduleNames}</div>
            </td>
          </tr>
        </tbody>
      )
    }
    return (
      <span>
        <Modal
          title="用户详情"
          visible = {this.context.role.state.detail.modal}
          onOk = {this.handleSubmit}
          onCancel = {this.handleCancel}
        >
          <table className='detail-table'>
            {roleInfoList}
          </table>
        </Modal>
      </span>
    )
  }
})
