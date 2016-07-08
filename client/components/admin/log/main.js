import React from 'react';
import {Table, Breadcrumb, Icon, Form, Input, Button, Checkbox, Badge} from 'antd';

class AdminLog extends React.Component {
  componentDidMount() {
    console.log('AdminLog');
  };
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'index',
    }, {
      title: '登录名称',
      dataIndex: 'login_name',
    }, {
      title: '最后访问时间',
      dataIndex: 'last_access_date',
    }, {
      title: '最后访问IP',
      dataIndex: 'last_access_ip',
    }, {
      title: '今日访问次数',
      dataIndex: 'today_access_times',
      render: text => <span className='badge'>{text}</span>,
    }, {
      title: '总访问次数',
      dataIndex: 'total_access_times',
      render: text => <span className='badge'>{text}</span>,
    }];
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        index: i,
        login_name: 'admin',
        last_access_date: 32,
        last_access_ip: '165.163.1.13',
        today_access_times: '2',
        total_access_times: '53'
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
              访问日志
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className='second'>
          <Form inline>
            <Form.Item label="关键字">
              <Input placeholder="请输入日志名称" />
            </Form.Item>
            <Button type="ghost" htmlType="submit">查询</Button>
          </Form>
        </section>
        <section className='third'>
          <ul className='filter'>
            <li>
              <Button type="ghost">新建</Button>
            </li>
            <li>
              <Button type="ghost">修改</Button>
            </li>
            <li>
              <Button type="ghost">详情</Button>
            </li>
            <li>
              <Button type="ghost">授权</Button>
            </li>
          </ul>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} />
        </section>
      </div>
    );
  }
};

export default AdminLog;
