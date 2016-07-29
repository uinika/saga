import React from 'react'
import { Table } from 'antd';

export default React.createClass({
  contextTypes: {
     user: React.PropTypes.object
  },
  componentDidMount() {
    let queryString = {
      current: 1,
      pageSize: 12
    };
    this.context.user.dispatch.userFind(queryString)
  },
  columns(){
    return [{
        title: '序号',
        dataIndex: 'accountId',
      }, {
        title: '登陆名称',
        dataIndex: 'loginName',
      }, {
        title: '真实姓名',
        dataIndex: 'realName',
      }, {
        title: '状态',
        dataIndex: 'stateName',
      }, {
        title: '联系电话',
        dataIndex: 'tel',
      }, {
        title: '电子邮件',
        dataIndex: 'email'
    }]
  },
  pagination() {
    return {
      total: 1,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      },
    }
  },
  rowSelection(){
    return {
      onSelect : (record, selected, selectedRows) => {
        this.context.user.dispatch.userSelectSingle(record)
        this.context.user.dispatch.userSelectMultiple(selectedRows)
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        this.context.user.dispatch.userSelectMultiple(selectedRows)
      }
    }
  },
  render(){
    return (
      <span>
        <Table
          dataSource = { this.context.user.state.find.list }
          rowSelection = { this.rowSelection() }
          columns = { this.columns() }
          pagination = { this.pagination() }
        />
      </span>
    )
  }
})
