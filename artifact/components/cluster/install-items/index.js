

import React from 'react'
import { Button, Input, Icon, Tooltip, Radio, Upload , Form, notification } from 'antd'
export default React.createClass({
  render() {
    const props = {
      name: 'file',
      action: '/upload.do',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 上传成功。`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败。`);
        }
      },
    };
    const openNotificationWithIcon = function (type) {
      return function () {
        notification[type]({
          message: '手动注册',
          description: '在每一个不需要使用SSH的主机上手动注册代理服务，并在集群安装之前运行它',
        });
      };
    };
    return (
      <div id='cluster-install-items'>
        <h1>安装选项</h1>
        <p>为集群添加一组主机并提供SSH密钥。</p>
        <h1>添加主机</h1>
        <p>添加一组完全限定域名（Fully Qualified Domain Name）的主机，一行一个主机，或者使用<Tooltip  placement="topLeft" title='表达式你可以用表达式去指定多个目标主机。例如，指定主机01.域名到主机10.域名，在文本框中输入主机[01-10].域名.'>
        <a href="#">表达式</a></Tooltip></p>
        <textarea rows='5' cols='100'></textarea>
        <br/>
        <h1>主机注册信息</h1>
        <Radio>提供SSH私钥以实现自动注册主机</Radio><br/>
        <Upload {...props}>
          <Button type="ghost">
            <Icon type="upload" /> 点击上传
          </Button>
        </Upload>
        <textarea rows='5' cols='100'></textarea><br/>
        <Form inline>
          <Form.Item label='SSH用户'>
            <Input placeholder='root' />
          </Form.Item>
        </Form>
        <Radio>执行
          <a onMouseEnter={openNotificationWithIcon('warning')}>手动注册</a>
          主机，不适用SSH</Radio><br/>
        <Button type='ghost'>返回</Button>
      </div>
    )
  }
})
