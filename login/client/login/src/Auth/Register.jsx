import React from 'react'
import { Card, Flex, Typography, Form, Input, Button } from 'antd';



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
                    <Input placeholder='Enter your full name' />
                </Form.Item>
                <Form.Item 
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your email'
                    },
                    ]} 
                     >
                    <Input placeholder='Enter your email' />
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
