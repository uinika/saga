import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import {Table, Breadcrumb, Icon, Form, Input, Button, Checkbox, DatePicker} from 'antd'

export default Form.create()(
  React.createClass ({
    contextTypes: {
      logDetail: React.PropTypes.object
    },
    componentWillMount() {
      let pathParam = this.context.logDetail.pathParam
      let queryParam = this.context.logDetail.queryParam
      if(pathParam && queryParam) {
        let httpParam = _.assign({}, pathParam, queryParam)
        this.context.logDetail.dispatch.logDetailFind(httpParam)
        this.context.logDetail.dispatch.logDetailFindFilter(httpParam)
      }
    },
    handleFind() {
      let pathParam = this.context.logDetail.pathParam
      let queryParam = this.context.logDetail.queryParam
      let formValues = this.props.form.getFieldsValue
      let httpParam = _.assign({}, pathParam, queryParam, formValues)
      console.log(httpParam);
      this.context.logDetail.dispatch.logDetailFind(httpParam)
    },
    render() {
      const { getFieldProps } = this.props.form
      const columns = [{
        title: '序号',
        dataIndex: 'index',
      }, {
        title: '登录名称',
        dataIndex: 'loginName',
      }, {
        title: '真实姓名',
        dataIndex: 'realName',
      }, {
        title: '访问时间',
        dataIndex: 'accessDateTime',
      }, {
        title: '访问IP',
        dataIndex: 'accessIP'
      }, {
        title: '访问者浏览器',
        dataIndex: 'browser'
      }, {
        title: '访问者浏览器详情',
        dataIndex: 'browserDetail'
      }, {
        title: '访问操作',
        dataIndex: 'command'
      }]
      const rows = this.context.logDetail.state.find.list
      const pagination = {
        total: rows.length,
        showSizeChanger: true,
        onShowSizeChange(current, pageSize) {
          console.log('Current: ', current, '; PageSize: ', pageSize);
        },
        onChange(current) {
          console.log('Current: ', current);
        }
      }
      return (
        <div id='admin-log-detail'>
          <sction className='path wiserv-ui'>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Icon type='home' />
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
                  <DatePicker placeholder='起始时间' {...getFieldProps('startTime')} />
                  <span className='split'>到</span>
                  <DatePicker placeholder='结束时间' {...getFieldProps('endTime')} />
                  <Button onClick={this.handleFind} htmlType='submit'>查询</Button>
                </Form.Item>
              </Form>
            </span>
          </section>
          <section className='container wiserv-ui'>
            <Table columns={columns} dataSource={rows} pagination={pagination} />
          </section>
        </div>
      );
    }
  })
)
