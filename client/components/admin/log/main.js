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
        <sction className='path'>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              系统管理
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              日志管理
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
        <section className='container'>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} />
        </section>
      </div>
    );
  }
};

export default AdminLog;
