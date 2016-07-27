import React from 'react'
import { Modal } from 'antd'

export default React.createClass({
  contextTypes: {
     user: React.PropTypes.object
  },
  componentWillMount: function(){

  },
  componentDidMount: function(){

  },
  handleSubmit() {
    this.context.user.dispatch.toggleDetailModal(false)
  },
  handleCancel(event) {
    this.context.user.dispatch.toggleDetailModal(false)
  },
  render() {
    return (
      <span>
        <Modal
          title="用户详情"
          visible = {this.context.user.state.detail.modal}
          onOk = {this.handleSubmit}
          onCancel = {this.handleCancel}
        >
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </Modal>
      </span>
    )
  }
})
