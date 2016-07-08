import React from 'react';
import {Table, Breadcrumb, Icon, Form, Input, Button, Checkbox} from 'antd';

class AdminLog extends React.Component {
  componentDidMount() {
    console.log('AdminLog');
  };
  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '年龄',
      dataIndex: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
    }];
    const data = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    }, {
      key: '3',
      name: '李大嘴',
      age: 32,
      address: '西湖区湖底公园1号',
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
      <div id='admin-log'>
        <section className='first'>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              系统管理
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              日志管理
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className='second'>
          <Form inline>
            <Form.Item label="账户">
              <Input placeholder="请输入账户名" />
            </Form.Item>
            <Form.Item label="密码" >
              <Input type="password" placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form>
        </section>
        <section className='third'>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </section>
      </div>
    );
  }
};

export default AdminLog;
