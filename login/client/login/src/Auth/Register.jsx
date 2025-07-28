import React from 'react'
import { Card, Flex, Typography, Form, Input, Button } from 'antd';
import { p } from 'framer-motion/client';



const Register = () => {

    const handleRegister = (values) => {
        console.log(values)
    }


  return (
    <div>
      <Card className='form-container'>
        <Flex>
            <Flex vertical flex={1}>
                <Typography.Title level={3} strong className='title'>Create an account</Typography.Title>
                <Typography.Text type="secondary" strong className='slogan'>Join for exclusive access!.</Typography.Text>
                <Form 
                layout='vertical'
                 onFinish={handleRegister} 
                 autoComplete='off'
                 >
                <Form.Item 
                label="Full Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your full name'
                    }
                    ]} 
                     >
                    <Input size="large" placeholder='Enter your full name' />
                </Form.Item>
                <Form.Item 
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your email'
                    },
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!'
                    }
                    ]} 
                     >
                    <Input size="large" placeholder='Enter your email' />
                </Form.Item>
                 <Form.Item 
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your password'
                    }
                    ]} 
                     >
                    <Input.Password size="large" placeholder='Enter your password' />
                </Form.Item>
                 <Form.Item 
                label="Password "
                name="passwordConfirm"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password'
                    }
                    ]} 
                     >
                    <Input.Password size="large" placeholder='Re-enter your password' />
                </Form.Item>
                    <Form.Item>
                        <Button 
                        type='primary'
                        htmlType='submit'
                        size='large' 
                        className='btn'>Create Account</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button>Create Account</Button>
                    </Form.Item>
                </Form>
            </Flex>




            <Flex></Flex>

        </Flex>
      </Card>
    </div>
  )
}

export default Register
