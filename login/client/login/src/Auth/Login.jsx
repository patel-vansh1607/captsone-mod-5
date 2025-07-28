import React from 'react'
import { Card, Typography, Form, Input, Button, Flex, Alert, Spin} from 'antd';
import { Link } from 'react-router-dom';
import registerimage from "../assets/images.jpeg"

const Login = () => {
  return (
    <Card className="form-container" >   
      <Flex gap="large" align='center'>
        <Flex vertical flex={1}>
          <Typography.Title level={3} className="title">
          <strong>Create an account</strong>
        </Typography.Title>
        <Typography.Text type="secondary" className="slogan">
          Join for exclusive access!
        </Typography.Text>

        <Form layout="vertical" onFinish={handleRegister} autoComplete="off" style={{ marginTop: 20 }}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please enter your full name',
              },
            ]}
          >
            <Input size="large" placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your email',
              },
              {
                type: 'email',
                message: 'The input is not a valid E-mail!',
              },
            ]}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="passwordConfirm"
            rules={[
              {
                required: true,
                message: 'Please confirm your password',
              },
            ]}
          >
            <Input.Password size="large" placeholder="Re-enter your password" />
          </Form.Item>
            {/* {
              error && <Alert description={error} type="error" showIcon closable className='alert' />
            } */}
          <Form.Item>
            <Button 
            /* type={`${loading ? '' : 'primary'}`} */
            htmlType="submit"
            size="large"
            block
            className='btn'>
{/*               {loading ? <Spin /> : 'Create Account'}
 */}            </Button>
          </Form.Item>

          <Form.Item>
            <Link to= "/login">
            <Button 
            size="large"
            block
            className='btn'>
              Sign In
            </Button>
            </Link>
          </Form.Item>
        </Form>
        </Flex>
        <Flex flex={1}>
          <img src={registerimage} className='auth-image' />
        </Flex>
      </Flex>
      </Card>
  )
}

export default Login
