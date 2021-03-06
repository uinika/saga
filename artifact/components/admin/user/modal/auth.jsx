import React from 'react'
import { Modal, Transfer, Button, Input } from 'antd'

export default React.createClass({
  contextTypes: {
    user: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      mockData: [],
      targetKeys: [],
    };
  },
  componentDidMount() {
    const authTarget = this.context.user.auth.result
    this.getMock();
  },
  getMock() {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i,
        title: `内容${i + 1}`,
        description: `内容${i + 1}的描述`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  },
  handleChange(targetKeys, direction, moveKeys) {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  },
  renderFooter() {
    return (
      <Button type="ghost" size="small" style={{ float: 'right', margin: 5 }}
        onClick={this.getMock}
      >
        刷新
      </Button>
    );
  },
  handleSubmit() {
    this.context.action.authModal(false)
  },
  handleCancel(event) {
    this.context.action.authModal(false)
  },
  getAuthData() {
    const authTarget = this.context.user.auth.result
    if( authTarget ){
      return {
        notAddList: authTarget.notAddList,
        addList: authTarget.addList
      }
    }
  },
  render() {
    console.log();
    return (
      <span>
        <Modal
          title="授权用户"
          visible={this.context.user.auth.modal}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <Transfer
            showSearch
            dataSource={this.getAuthData.addList}
            targetKeys={this.getAuthData.notAddList}
            onChange={this.handleChange}
            render={item => item.title}
          />
        </Modal>
      </span>
    )
  }
})
