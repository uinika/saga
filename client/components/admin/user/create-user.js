import React from 'react';
import {Button, Modal, Input} from 'antd';

const CreateUser = React.createClass({
  getInitialState() {
    return { visible: this.props.visible };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <span className='user-modal'>
        <Button type="ghost" onClick={this.showModal}>新建</Button>
        <Modal title="添加用户"
         visible={this.state.visible}
         onOk={this.handleOk}
         onCancel={this.handleCancel}
        >
          <Input placeholder="基本使用" />
        </Modal>
      </span>
    )
  }
})

export default CreateUser;
