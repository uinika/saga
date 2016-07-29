import React from 'react';
import { Breadcrumb, Icon } from 'antd'

export default React.Component ({
  componentDidMount() {
    // console.log('AdminModule');
  },
  render() {
    return (
      <div id='admin-module'>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            系统管理
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            模块管理
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
})
