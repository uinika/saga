import React from 'react'
import { Modal } from 'antd'

export default React.createClass({
  contextTypes: {
     container: React.PropTypes.object
  },
  componentWillMount: function(){

  },
  componentDidMount: function(){

  },
  handleSubmit() {
    //
    this.context.container.toggleDetailModal(false)
  },
  handleCancel(event) {
    this.context.container.toggleDetailModal(false)
  },
  render() {
    return (
      <span>
        <Modal
          title="用户详情"
          visible={this.context.container.user.detail.modal}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
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
