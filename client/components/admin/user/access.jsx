import React from 'react'
import { Icon, Button } from 'antd'
import { CREATE, UPDATE, DETAIL, AUTH } from '../../../common/marker'

export default React.createClass({
  contextTypes: {
     user: React.PropTypes.object
  },
  showCreateModal() {
    this.context.user.dispatch.toggleCreateModal(true)
  },
  showUpdateModal() {
    this.context.user.dispatch.toggleUpdateModal(true)
  },
  showDetailModal() {
    this.context.user.dispatch.toggleDetailModal(true)
  },
  showAuthModal() {
    this.context.user.dispatch.toggleAuthModal(true)
  },
  render() {
    return (
      <span className='buttons'>
        <Button type='ghost' onClick = { this.showCreateModal }><Icon type='plus' />新建</Button>
        <Button type='ghost' onClick = { this.showUpdateModal }><Icon type='edit' />修改</Button>
        <Button type='ghost' onClick = { this.showDetailModal }><Icon type='book' />详情</Button>
        <Button type='ghost' onClick = { this.showAuthModal }><Icon type='lock' />授权</Button>
      </span>
    )
  }
})
