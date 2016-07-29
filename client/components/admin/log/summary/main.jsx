import React from 'react'
import { Link } from 'react-router'
import QueryString from 'query-string'
import Moment from 'moment'
import { Breadcrumb, Icon, Input, Form, Button, Table } from 'antd'

export default Form.create({})(
  React.createClass({
    contextTypes: {
       log: React.PropTypes.object
    },
    componentDidMount() {
      let queryString = {
        current: 1,
        pageSize: 12
      };
      this.context.log.dispatch.logSummaryFind(queryString)
    },
    handleFind() {
      let loginName = this.props.form.getFieldValue('loginName')
      if(loginName) {
        this.context.log.dispatch.logSummaryFindFilter(loginName)
        let queryString = {
          current: 1,
          pageSize: 12,
          loginName: loginName
        }
        this.context.log.dispatch.logSummaryFind(queryString)
      }
    },
    columns(){
      return [{
          title: '序号',
          render: (text, record, index) => (++index)
        }, {
          title: '登录名称',
          dataIndex: 'loginName',
        }, {
          title: '最后访问时间',
          dataIndex: 'maxDate',
        }, {
          title: '最后访问IP',
          dataIndex: 'maxIp',
        }, {
          title: '今日访问次数',
          dataIndex: 'todayAmount',
          render: (text, record, index) => {
            let httpQuery = record.loginName +'?'+ QueryString.stringify({
              startTime: Moment().format('YYYY-MM-DD')+'00:00:00',
              endTime: Moment().format('YYYY-MM-DD')+'23:59:59'
            })
            return (
              <Link to={ '/frame/admin/log/detail/' + httpQuery }>
                {text}
              </Link>
            )
          }
        }, {
          title: '总访问次数',
          dataIndex: 'amount',
          render: (text, record, index) => {
            return <Link to={'/frame/admin/log/detail/'+record.loginName}>{text}</Link>
          }
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
              <Form.Item label='登陆名称'>
                <Input placeholder='输入查询条件' {...getFieldProps('loginName')} />
              </Form.Item>
              <Button onClick={this.handleFind} type='ghost'>查询</Button>
            </Form>
          </section>
          <section className='table'>
            <Table
              dataSource = { this.context.log.state.find.list }
              columns = { this.columns() }
              pagination = { this.pagination() }
            />
          </section>
        </span>
      )
    }
  })
)
