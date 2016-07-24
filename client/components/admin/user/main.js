import React from 'react';
import {Table, Breadcrumb, Icon, Form, Input, Button, Checkbox, Modal, Select} from 'antd';

const AdminUser = React.createClass({
  componentDidMount() {
    let queryString = {
      current: 1,
      pageSize: 12
    };
    this.props.findUser(queryString);
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
      total: 1,
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
        <sction className='path wiserv-ui'>
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
        <section className='filter wiserv-ui'>
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
              <Select defaultValue="1" style={{ width: 120 }} allowClear>
                <Select.Option value="1">闲置</Select.Option>
                <Select.Option value="2">激活</Select.Option>
              </Select>
              </Form.Item>
              <Button type="ghost" htmlType="submit">高级查询</Button>
            </Form>
          </span>
        </section>
        <section className='operator wiserv-ui'>
          <span className='buttons'>
            <Button type="ghost"><Icon type="plus" />新建</Button>
            <Button type="ghost"><Icon type="edit" />修改</Button>
            <Button type="ghost"><Icon type="book" />详情</Button>
            <Button type="ghost"><Icon type="lock" />授权</Button>
          </span>
        </section>
        <section className='container wiserv-ui'>
          <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.users} pagination={pagination} />
        </section>
      </div>
    );
  }
});

export default AdminUser;
