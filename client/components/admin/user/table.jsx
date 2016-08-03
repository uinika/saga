import React from 'react'
import { Table } from 'antd'

export default React.createClass({
  contextTypes: {
    user: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  componentWillMount() {
    let queryString = {
      current: 1,
      pageSize: 12
    }
    this.context.action.find(queryString)
  },
  dataSource() {
    return this.context.user.find.list.body
  },
  columns(){
    return [{
        title: '序号', render: (text, record, index) => (++index),
        sorter: true,
        sortOrder: 'descend'
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
      type: 'radio',
      onSelect: (record, selected, selectedRows) => {
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
    let head = this.context.user.find.list.head
    if(head) {
      return {
        total: head.total,
        current: 1,
        pageSize: 12,
        defaultCurrent: 1,
        defaultPageSize: 12,
        pageSizeOptions: ['12', '25', '50'],
        showSizeChanger: true,
        showQuickJumper: true,
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
          console.log(this.pageSize);
          this.context.action.find(httpParam)
        }
      }
    }
  },
  render(){
    return (
      <span>
        <Table
          dataSource = { this.context.user.find.list.body }
          rowSelection = { this.rowSelection() }
          columns = { this.columns() }
          pagination = { this.pagination() }
        />
      </span>
    )
  }
})
