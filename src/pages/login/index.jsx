import { Form, Button, Input } from 'antd-mobile'
import { LoginWrapper } from '../login/style'

import { setToken } from '../../utils/storage'
import http from '../../utils/http'

function Login({ navigate }) {
  const onFinish = async ({ username, password }) => {
    const res = await http.post('http://49.232.243.28:3007/api/login', {
      username,
      password,
    })

    if (res.data.status !== 0) {
      console.log('登陆失败')
    } else {
      setToken(res.data.token)
      navigate(-2)
    }
  }
  return (
    <LoginWrapper>
      <div className="login">
        <Form
          layout="horizontal"
          footer={
            <Button block type="submit" color="primary" size="large">
              登陆
            </Button>
          }
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '用户名不能为空' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
              { pattern: /^\d{6}$/, message: '密码格式不正确！' },
            ]}
          >
            <Input placeholder="请输入密码" />
          </Form.Item>
        </Form>
      </div>
    </LoginWrapper>
  )
}
export default Login
