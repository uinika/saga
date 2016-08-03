import React from 'react'
import { Table } from 'antd';

export default React.createClass({
  contextTypes: {
    user: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  componentDidMount() {
    let queryString = {
      current: 1,
      pageSize: 12
    };
    this.context.action.find(queryString)
  },
  dataSource() {
    return this.context.user.find.list
  },
  columns(){
    return [{
        title: '序号', render: (text, record, index) => (++index)
      }, {
        title: '登陆名称', dataIndex: 'loginName'
      }, {
        title: '真实姓名', dataIndex: 'realName'
      }, {
        title: '状态', dataIndex: 'stateName',
        render: (text, record, index) => {
          if('1' === record.state) {
            return <span className='bread-tag-purple'>{text}</span>
          }
          else if('0' === record.state) {
            return <span className='bread-tag-carmine'>{text}</span>
          }
        }
      }, {
        title: '联系电话', dataIndex: 'tel'
      }, {
        title: '电子邮件', dataIndex: 'email'
    }]
  },
  rowSelection(){
    return {
      onSelect : (record, selected, selectedRows) => {
        this.context.action.selectSingle(record)
      },
      onChange: (selectedRowKeys, selectedRows) => {
        this.context.action.selectMultiple(selectedRows)
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        this.context.action.selectMultiple(selectedRows)
      }
    }
  },
  pagination() {
    return {
      total: 18,
      showSizeChanger: true,
      defaultPageSize: 12,
      pageSize: 12,
      pageSizeOptions: ['12', '25', '50'],
      onChange: (current) => {
        let httpParam = {
          current: current,
          pageSize: 12
        }
        this.context.action.find(httpParam)
      },
      onShowSizeChange: (current, pageSize) => {
        let httpParam = {
          current: current,
          pageSize: pageSize
        }
        this.context.action.find(httpParam)
      }
    }
  },
  render(){
    return (
      <span>
        <Table
          dataSource = { this.dataSource() }
          rowSelection = { this.rowSelection() }
          columns = { this.columns() }
          pagination = { this.pagination() }
        />
      </span>
    )
  }
})
