import React from 'react'
import { Icon, Button } from 'antd';

export default React.createClass({
  contextTypes: {
     container: React.PropTypes.object
  },
  render(){
    return (
      <span className='buttons'>
        <Button type="ghost" onClick={this.showModal}><Icon type="plus" />新建</Button>
        <Button type="ghost"><Icon type="edit" />修改</Button>
        <Button type="ghost"><Icon type="book" />详情</Button>
        <Button type="ghost"><Icon type="lock" />授权</Button>
      </span>
    )
  }
})
