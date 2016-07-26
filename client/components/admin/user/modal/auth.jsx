import React from 'react'
import { Modal, Transfer, Button } from 'antd'

export default React.createClass({
  contextTypes: {
     user: React.PropTypes.object
  },
  getInitialState() {
    return {
      mockData: [],
      targetKeys: [],
    };
  },
  componentDidMount() {
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
  handleChange(targetKeys) {
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
    //
    this.context.container.toggleAuthModal(false)
  },
  handleCancel(event) {
    this.context.container.toggleAuthModal(false)
  },
  render() {

    return (
      <span>
        <Modal
          title="授权用户"
          visible={this.context.user.state.auth.modal}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          width={ 600 }
        >
          <Transfer
            dataSource={this.state.mockData}
            showSearch
            listStyle={{ width: 226, height: 320 }}
            operations={['已经授予角色', '未授予角色']}
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            render={item => `${item.title}-${item.description}`}
            footer={this.renderFooter}
          />
        </Modal>
      </span>
    )
  }
})
