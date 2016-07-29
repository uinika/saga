import React from 'react'
import { Breadcrumb, Icon, Input, Form, Button, Table } from 'antd'

export default Form.create({})(
  React.createClass({
    contextTypes: {
       logList: React.PropTypes.object
    },
    columns(){
      return [{
          title: '序号',
          dataIndex: 'accountId',
        }, {
          title: '登录名称',
          dataIndex: 'loginName',
        }, {
          title: '最后访问时间',
          dataIndex: 'realName',
        }, {
          title: '最后访问IP',
          dataIndex: 'stateName',
        }, {
          title: '今日访问次数',
          dataIndex: 'tel',
        }, {
          title: '总访问次数',
          dataIndex: 'email'
      }]
    },
    pagination() {
      return {
        total: 1,
        showSizeChanger: true,
        onShowSizeChange(current, pageSize) {
          console.log('Current: ', current, '; PageSize: ', pageSize);
        },
        onChange(current) {
          console.log('Current: ', current);
        },
      }
    },
    render() {
      const { getFieldProps } = this.props.form
      return (
        <span id='admin-log-detail'>
          <section className='path'>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                系统管理
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                访问日志
              </Breadcrumb.Item>
            </Breadcrumb>
          </section>
          <section className='filter'>
            <Form inline className='form'>
              <Form.Item label='关键字'>
                <Input placeholder='登陆名称' {...getFieldProps('loginName')} />
              </Form.Item>
              <Button onClick={this.handleFind} type='ghost'>查询</Button>
            </Form>
          </section>
          <section className='table'>
            <Table
              //dataSource = { this.context.logList.state.find.list }
              columns = { this.columns() }
              pagination = { this.pagination() }
            />
          </section>
        </span>
      )
    }
  })
)
