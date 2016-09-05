import React from 'react'
import { Icon, Button } from 'antd'
import CreateModal from './modal/create'
import UpdateModal from './modal/update'
import DetailModal from './modal/detail'
import AuthModal from './modal/auth'
import _ from 'lodash'

export default React.createClass({
  contextTypes: {
     role: React.PropTypes.object
  },
  render() {
    return (
      <span className='buttons'>
        <Button type='ghost' onClick = {() => {this.context.role.dispatch.roleCreateModal(true)}}>
          <Icon type='plus' />新建
        </Button>
        <Button type='ghost' onClick = {() => {this.context.role.dispatch.roleUpdateModal(true)}}>
          <Icon type='edit' />修改
        </Button>
        <Button type='ghost' onClick = {() => {
          this.context.role.dispatch.roleDetailModal(true)
          this.context.role.dispatch.roleDetail(this.context.role.state.select.single.roleId)
        }}>
          <Icon type='book' />详情
        </Button>
        <Button type='ghost' onClick = {() => {this.context.role.dispatch.roleAuthModal(true)}}>
          <Icon type='lock' />授权
        </Button>
        <CreateModal />
        <UpdateModal />
        <DetailModal />
        <AuthModal />
      </span>
    )
  }
})
