import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'

export default React.createClass({
  contextTypes: {
    container: React.PropTypes.object
  },
  componentDidMount() {
    this.context.container.fetchMenuTree()
  },
  render() {
    const menuTree = [];
    _.map(this.context.container.frame.menuTree, function(item1){
      _.map(item1.children, function(item2, index){
        menuTree.push(<Menu.Item key={index}><Link to={item2.entryURL}>{item2.menuName}</Link></Menu.Item>);
      })
    })
    return (
      <span>
        <Menu className='menu' mode='inline' defaultOpenKeys={['menu']}>
          <Menu.SubMenu key='menu' title='系统管理'>
            {menuTree}
          </Menu.SubMenu>
        </Menu>
      </span>
    )
  }
})
