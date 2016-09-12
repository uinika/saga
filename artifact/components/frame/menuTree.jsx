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
          <Menu.SubMenu key='menu1' title='Service(服务)'>

          </Menu.SubMenu>
          <Menu.SubMenu key='menu2' title='Hosts(主机列表)'>

          </Menu.SubMenu>
          <Menu.SubMenu key='menu3' title='Hosts(添加主机)'>

          </Menu.SubMenu>
          <Menu.SubMenu key='menu4' title='Views(图库)'>

          </Menu.SubMenu>
          <Menu.SubMenu key='menu5' title='Admin(管理)'>
            {menuTrees}
          </Menu.SubMenu>
          <Menu.SubMenu key='menu6' title='Alerts(告警)'>

          </Menu.SubMenu>
          <Menu.SubMenu key='menu7' title='AddService(添加服务)'>
            <Menu.Item key="AddService-1">
              <Link to='/frame/add-service/select-service'>选择服务</Link>
            </Menu.Item>
            <Menu.Item key="AddService-2">
              <Link to='/frame/add-service/distribute-hosts'>分配主机</Link>
            </Menu.Item>
            <Menu.Item key="AddService-3">
              <Link to='/frame/add-service/distribute-node-and-client'>分配节点和客户端</Link>
            </Menu.Item>
            <Menu.Item key="AddService-4">
              <Link to='/frame/add-service/customized-service'>定制服务</Link>
            </Menu.Item>
            <Menu.Item key="AddService-5">
              <Link to='/frame/add-service/configuration-identification'>配置标识</Link>
            </Menu.Item>
            <Menu.Item key="AddService-6">
              <Link to='/frame/add-service/review'>检查</Link>
            </Menu.Item>
            <Menu.Item key="AddService-7">
              <Link to='/frame/add-service/install-start-test'>安装，启动和测试</Link>
            </Menu.Item>
            <Menu.Item key="AddService-8">
              <Link to='/frame/add-service/survey'>概览</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='menu8' title='AddCluter(添加集群)'>
            <Menu.Item key="AddCluter-1">
              <Link to='/frame/cluster/start'>开始</Link>
            </Menu.Item>
            <Menu.Item key="AddCluter-2">
              <Link to='/frame/cluster/resource-url'>资源地址</Link>
            </Menu.Item>
            <Menu.Item key="AddCluter-3">
              <Link to='/frame/cluster/install-items'>安装选项</Link>
            </Menu.Item>
            <Menu.Item key="AddCluter-4">
              <Link to='/frame/cluster/comfirm-hosts'>确认主机</Link>
            </Menu.Item>
            <Menu.Item key="AddCluter-5">
              <Link to='/frame/cluster/survey'>概览</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </span>
    )
  }
})
