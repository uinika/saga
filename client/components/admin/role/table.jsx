import React from 'react'
import { Table } from 'antd';

export default React.createClass({
  contextTypes: {
     role: React.PropTypes.object
  },
  componentDidMount() {
    let queryString = {
      current: 1,
      pageSize: 12
    };
    this.context.role.dispatch.roleFind(queryString)
  },
  columns(){
    return [{
      title: '序号',
      render: (text, record, index) => (++index)
    }, {
      title: '角色名称',
      dataIndex: 'roleName',
      render: (text, record, index) => {
        return <span className='bread-tag-blue'>{text}</span>
      }
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
        this.context.role.dispatch.roleSelectSingle(record)
        this.context.role.dispatch.roleSelectMultiple(selectedRows)
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        this.context.role.dispatch.roleSelectMultiple(selectedRows)
      }
    }
  },
  render(){
    console.log(this.context.role.state.find.list);
    return (
      <span>
        <Table
          dataSource = { this.context.role.state.find.list }
          rowSelection = { this.rowSelection() }
          columns = { this.columns() }
          pagination = { this.pagination() }
        />
      </span>
    )
  }
})
