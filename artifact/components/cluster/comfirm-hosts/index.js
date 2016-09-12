
import React from 'react'
import { Button, Input,  Form, Table, Progress, Alert } from 'antd'
export default React.createClass({
  render() {
    const data = [{
      key: '1',
      host: 'ambari.custom1',
      time:  <Progress percent={60} status="active" />,
      status: <a href='#'>安装中</a>,
      operation: <Button>删除</Button>
    }, {
      key: '2',
      host: 'ambari.custom2',
      time: <Progress percent={80} status="exception" />,
      status: <a href='#'>失败</a>,
      operation: <Button>删除</Button>
    }, {
      key: '3',
      host: 'ambari.custom3',
      time: <Progress percent={100} />,
      status: <a href='#'>成功</a>,
      operation: <Button>删除</Button>
    }];
    const pagination = {
      total: data.length,
      showSizeChanger: true,
      showQuickJumper: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      },
    };
    const columns = [{
     title: '主机',
     dataIndex: 'host',
     key: 'host',
    }, {
     title: '进度',
     dataIndex: 'time',
     key: 'time'
    }, {
     title: '状态',
     dataIndex: 'status',
     key: 'status'
   }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation'
   }];
   // 通过 rowSelection 对象表明需要行选择
    const rowSelection = {
      onChange(selectedRowKeys, selectedRows) {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
      },
      onSelectAll(selected, selectedRows, changeRows) {
        console.log(selected, selectedRows, changeRows);
      },
    };

    return (
      <div id='cluster-comfirm-hosts'>
        <h1>确认主机</h1>
        <p>
          注册主机<br/>
          确认主机列表且可以删除不需要加入集群中的主机。
        </p>
        <div className="table-operations">
          <Button>删除选项中</Button>
          <Button>失败重试</Button>
        </div>
        <Table rowSelection={rowSelection}
               columns={columns}
               dataSource={data}
               onChange={this.handleChange}
               pagination={pagination}
               size="middle"
        />
        <div><Alert message="需要注册的x台主机已检测通过。" type="success" /><a href='#'>点击查看结果</a></div>
        <div><Alert message="有x台主机注册失败跳过检查。" type="error" /></div>
        <div><Alert message="在x台已注册的主机中检查时发现一些警告。" type="warning" /><a href='#'>点击查看结果</a></div>
        <Button type='ghost'>返回</Button>
        <Button type='ghost'>下一步</Button>
    </div>
    )
  }
})
