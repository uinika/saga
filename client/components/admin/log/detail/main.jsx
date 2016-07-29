import React from 'react'
import { Link } from 'react-router'
import {Table, Breadcrumb, Icon, Form, Input, Button, Checkbox, DatePicker} from 'antd'

export default React.createClass ({
  componentDidMount() {
    // console.log('AdminLog');
  },
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
      <div id='admin-log-detail'>
        <sction className='path wiserv-ui'>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              系统管理
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={'/frame/admin/log/summary'}>访问日志</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              日志详情
            </Breadcrumb.Item>
          </Breadcrumb>
        </sction>
        <section className='filter wiserv-ui'>
          <span className='date '>
            <Form inline>
              <Form.Item label='访问时间'>
                <DatePicker placeholder='起始时间' />
                <span className='split'>到</span>
                <DatePicker placeholder='结束时间' />
                <Button type="ghost" htmlType="submit">查询</Button>
              </Form.Item>
            </Form>
          </span>
        </section>
        <section className='container wiserv-ui'>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} />
        </section>
      </div>
    );
  }
})