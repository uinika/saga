import React from 'react'
import { Icon, Button } from 'antd'
import CreateModal from './modal/create'
import UpdateModal from './modal/update'
import DetailModal from './modal/detail'
import AuthModal from './modal/auth'
import _ from 'lodash'

export default React.createClass({
  contextTypes: {
     user: React.PropTypes.object
  },
  render() {
    return (
      <span className='buttons'>
        <Button type='ghost' onClick = {() => {this.context.user.dispatch.userCreateModal(true)}}>
          <Icon type='plus' />新建
        </Button>
        <Button type='ghost' onClick = {() => {this.context.user.dispatch.userUpdateModal(true)}}>
          <Icon type='edit' />修改
        </Button>
        <Button type='ghost' onClick = {() => {
          this.context.user.dispatch.userDetailModal(true)
          this.context.user.dispatch.userDetail(this.context.user.state.select.single.accountId)
        }}>
          <Icon type='book' />详情
        </Button>
        <Button type='ghost' onClick = {() => {this.context.user.dispatch.userAuthModal(true)}}>
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
