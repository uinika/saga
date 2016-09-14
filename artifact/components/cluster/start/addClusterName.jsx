import React from 'react'
import { Form, Button, Input} from 'antd'
export default Form.create({})(
    React.createClass({
      contextTypes: {
        cluster:React.PropTypes.object.isRequired,
        action: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func.isRequired
      },
    handleSubmit(e) {
      e.preventDefault();
      const clusterName = this.props.form.getFieldsValue();
      console.log('收到表单值：', clusterName);
      this.context.action.addclusterName(clusterName);
      this.context.action.addclusterNameNext(this.context.dispatch);
    },
    render() {
      const { getFieldProps } = this.props.form
      const target = this.context.cluster.select.result1
      return (
        <span className='form'>
          <Form horizontal >
            <Form.Item label='请命名你的集群'>
              <Input placeholder='' style={{width:400 }} {...getFieldProps('clusterName',{initialValue:target.clusterName})} />
            </Form.Item>
            <Button  type='primary' onClick={this.handleSubmit}>下一步</Button>
          </Form>
        </span>
      )
    }
  })
)
