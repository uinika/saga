import React from 'react';
import ReactDom from 'react-dom';
import { Menu, Icon } from 'antd';

class Index extends React.Component {
  componentDidMount() {
    fetch('http://172.16.0.119:8080/test/12345', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.token
      }
    })
    .then(result => result.json())
    .then(data => console.log(data));
  };
  render() {
    return (
      <div id='dashboard-main'>
        <Menu onClick={this.handleClick} style={{ width: 240 }} defaultOpenKeys={['sub1']} mode='inline'>
           <Menu.SubMenu key='sub1' title={<span><Icon type='mail' /><span>导航一</span></span>}>
             <Menu.ItemGroup title='分组1'>
               <Menu.Item key='1'>选项1</Menu.Item>
               <Menu.Item key='2'>选项2</Menu.Item>
             </Menu.ItemGroup>
             <Menu.ItemGroup title='分组2'>
               <Menu.Item key='3'>选项3</Menu.Item>
               <Menu.Item key='4'>选项4</Menu.Item>
             </Menu.ItemGroup>
           </Menu.SubMenu>
           <Menu.SubMenu key='sub2' title={<span><Icon type='appstore' /><span>导航二</span></span>}>
             <Menu.Item key='5'>选项5</Menu.Item>
             <Menu.Item key='6'>选项6</Menu.Item>
             <Menu.SubMenu key='sub3' title='三级导航'>
               <Menu.Item key='7'>选项7</Menu.Item>
               <Menu.Item key='8'>选项8</Menu.Item>
             </Menu.SubMenu>
           </Menu.SubMenu>
           <Menu.SubMenu key='sub4' title={<span><Icon type='setting' /><span>导航三</span></span>}>
             <Menu.Item key='9'>选项9</Menu.Item>
             <Menu.Item key='10'>选项10</Menu.Item>
             <Menu.Item key='11'>选项11</Menu.Item>
             <Menu.Item key='12'>选项12</Menu.Item>
           </Menu.SubMenu>
         </Menu>
      </div>
    );
  }
};

export default Index;
