import React from 'react'
import { Icon, Button } from 'antd'
import CreateModal from './modal/create'
import UpdateModal from './modal/update'
import DetailModal from './modal/detail'
import AuthModal from './modal/auth'
import _ from 'lodash'

export default React.createClass({
  contextTypes: {
    user: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <span className='buttons'>
        <Button type='ghost' onClick = {() => this.context.action.createModal(true)}>
          <Icon type='plus' />新建
        </Button>
        <Button type='ghost' onClick = {() => this.context.action.updateModal(true)}>
          <Icon type='edit' />修改
        </Button>
        <Button type='ghost' onClick = {() => {
          this.context.action.detailModal(true)
          this.context.action.detail(this.context.user.select.single.accountId)
        }}>
          <Icon type='book' />详情
        </Button>
        <Button type='ghost' onClick = {() => {
          this.context.action.authModal(true)
          this.context.action.auth(this.context.user.select.single.accountId, '')
        }}>
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
