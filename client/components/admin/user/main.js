import React from 'react';
import {Table, Breadcrumb, Icon, Form, Input, Button, Checkbox, Badge} from 'antd';

class AdminUser extends React.Component {
  componentDidMount() {
    console.log('AdminUser');
  };
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'index',
    }, {
      title: '登陆名称',
      dataIndex: 'login_name',
    }, {
      title: '真实姓名',
      dataIndex: 'real_name',
    }, {
      title: '所属部门',
      dataIndex: 'department',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '联系电话',
      dataIndex: 'telephone',
    }, {
      title: '电子邮件',
      dataIndex: 'email'
    }];
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        index: i,
        login_name: '数据录入员',
        real_name: '勤智数码',
        department: '大数据与智慧城市事业部',
        status: '激活',
        telephone: '18785639168',
        email: 'admin@chinawiserv.com'
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
      <div id='admin-user'>
        <sectin className='filter'>
          <p className='form1'>
            <Form inline>
              <Form.Item label="登陆名称">
                <Input />
              </Form.Item>
              <Button type="ghost" htmlType="submit">查询</Button>
            </Form>
          </p>
          <p className='form2'>
            <Form inline>
              <Form.Item label="用户状态">
                <Input />
              </Form.Item>
              <Button type="ghost" htmlType="submit">高级查询</Button>
            </Form>
          </p>
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

export default AdminUser;
