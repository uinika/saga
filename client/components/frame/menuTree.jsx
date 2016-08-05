import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'

export default React.createClass({
  contextTypes: {
    frame: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    this.context.action.getMenuTree()
  },
  render() {
    const menuTrees = []
    _.map(this.context.frame.menuTree.body, function(item1){
      _.map(item1.children, function(item2, index){
        menuTrees.push(<Menu.Item key={index}><Link to={item2.entryURL}>{item2.menuName}</Link></Menu.Item>);
      })
    })
    return (
      <span>
        <Menu className='menu' mode='inline' defaultOpenKeys={['menu']}>
          <Menu.SubMenu key='menu' title='系统管理'>
            {menuTrees}
          </Menu.SubMenu>
        </Menu>
      </span>
    )
  }
})
