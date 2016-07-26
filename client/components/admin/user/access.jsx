import React from 'react'
import { Icon, Button } from 'antd'
import { CREATE, UPDATE, DETAIL, AUTH } from '../../../common/marker'

export default React.createClass({
  contextTypes: {
     container: React.PropTypes.object
  },
  showCreateModal() {
    this.context.container.toggleCreateModal(true)
  },
  showUpdateModal() {
    this.context.container.toggleUpdateModal(true)
  },
  showDetailModal() {
    this.context.container.toggleDetailModal(true)
  },
  showAuthModal() {
    this.context.container.toggleAuthModal(true)
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
