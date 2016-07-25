import React from 'react'
import { Table } from 'antd';

export default React.createClass({
  contextTypes: {
     container: React.PropTypes.object
  },
  componentDidMount() {
    let queryString = {
      current: 1,
      pageSize: 12
    };
    this.context.container.findUser(queryString)
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
        console.log(this.props.users);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
      }
    }
  },
  render(){
    return (
      <span className='buttons'>
        <Table
          dataSource = { this.context.container.user.list }
          rowSelection = { this.rowSelection() }
          columns = { this.columns() }
          pagination = { this.pagination() }
        />
      </span>
    )
  }
})