import React from 'react'
import { Button, Input,  Form, Table, Alert } from 'antd'

export default React.createClass({
  render() {
    const data = [{
      key: '1',
      hostStyle: 'HDFS',
      version:  '2.7.1.2.4',
      description: 'Apche分布式文件系统'
    }, {
      key: '2',
      hostStyle: 'Hadoop',
      version:  '2.7.1.2.4',
      description: 'Apche分布式文件系统'
    },{
      key: '3',
      hostStyle: 'Spark',
      version:  '2.7.1.2.4',
      description: 'Apche分布式文件系统'
    },{
      key: '4',
      hostStyle: 'YARN',
      version:  '2.7.1.2.4',
      description: 'Apche分布式文件系统'
    },{
      key: '5',
      hostStyle: 'Hive',
      version:  '2.7.1.2.4',
      description: 'Apche分布式文件系统'
    },{
      key: '6',
      hostStyle: 'Hbase',
      version:  '2.7.1.2.4',
      description: 'Apche分布式文件系统'
    },,{
      key: '7',
      hostStyle: 'Zookeeper',
      version:  '2.7.1.2.4',
      description: 'Apche分布式文件系统'
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
     title: '服务类型',
     dataIndex: 'hostStyle',
     key: 'hostStyle',
    }, {
     title: '版本',
     dataIndex: 'version',
     key: 'version'
    }, {
     title: '描述',
     dataIndex: 'description',
     key: 'description'
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
      <div id='add-service-select-service'>
        <h1>选择服务</h1>
        <div><Alert message="选择你要添加的服务类型。" type="info" /></div>
        {/*<Table rowSelection={rowSelection}
               columns={columns}
               dataSource={data}
               size="middle"
        />*/}
        <Button type='ghost'>返回</Button>
        <Button type='ghost'>下一步</Button>
    </div>
    )
  }
})
