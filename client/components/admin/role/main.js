import React from 'react';
import {Table, Breadcrumb, Icon, Form, Input, Button, Checkbox, Badge} from 'antd';

class AdminRole extends React.Component {
  componentDidMount() {
    console.log('AdminRole');
  };
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'index',
    }, {
      title: '角色名称',
      dataIndex: 'role_name',
    }];
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        index: i,
        role_name: '数据采集员'
      });
    }
    const pagination = {
      total: data.length,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      },
    };
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
      <div id='admin-role'>
        <sectin className='filter'>
          <Form inline>
            <Form.Item label="角色名称">
              <Input />
            </Form.Item>
            <Button type="ghost" htmlType="submit">查询</Button>
          </Form>
        </sectin>
        <sectin className='operator'>
          <Button type="ghost">新建</Button>
          <Button type="ghost">修改</Button>
          <Button type="ghost">详情</Button>
          <Button type="ghost">授权</Button>
        </sectin>
        <sectin className='container'>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} />
        </sectin>
      </div>
    );
  }
};

export default AdminRole;
