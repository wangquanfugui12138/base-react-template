import React from 'react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd'
import PropTypes from "prop-types"

const FormItem = Form.Item
class Login extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.userName === 'admin' && values.password === '123' && this.props.history.push('/')
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div style={{position: 'absolute',width: '100%',height: '100%',top: 0,background:'#fff',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Form onSubmit={this.handleSubmit} style={{maxWidth:'300px',padding:20,boxShadow:'0 0 3px 3px silver'}} >
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a style={{float:'right'}} href="123">Forgot password</a>
            <Button type="primary" htmlType="submit" style={{width:'100%'}}>
              Log in
            </Button>
            Or <a href="123">register now!</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const WrapperedLogin = Form.create()(Login)
export default WrapperedLogin