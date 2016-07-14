import React from 'react';
import {Table, Breadcrumb, Icon, Form, Input, Button, Checkbox, Modal} from 'antd';
import { Fetch, Validator } from '../../../common/http';
import CreateUser from './create-user';

const AdminUser = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount() {
    let queryString = {
      current: 1,
      pageSize: 12
    };
    Fetch({
      url: '/sys/accounts',
      method: 'GET',
      query: queryString
    })
    .then(data => {
      this.setState({ data: data.body });
     })
  },
  render() {
    const columns = [{
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
    }];
    const pagination = {
      total: this.state.data.length,
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
        <sction className='path'>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              系统管理
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              用户管理
            </Breadcrumb.Item>
          </Breadcrumb>
        </sction>
        <section className='filter'>
          <span className='form1'>
            <Form inline>
              <Form.Item label="登陆名称">
                <Input />
              </Form.Item>
              <Button type="ghost" htmlType="submit">查询</Button>
            </Form>
          </span>
          <span className='form2'>
            <Form inline>
              <Form.Item label="用户状态">
                <Input />
              </Form.Item>
              <Button type="ghost" htmlType="submit">高级查询</Button>
            </Form>
          </span>
        </section>
        <section className='operator'>
          <span className='buttons'>
            <CreateUser />
            <Button type="ghost">修改</Button>
            <Button type="ghost">详情</Button>
            <Button type="ghost">授权</Button>
          </span>
        </section>
        <section className='container'>
          <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={pagination} />
        </section>
      </div>
    );
  }
});

export default AdminUser;
