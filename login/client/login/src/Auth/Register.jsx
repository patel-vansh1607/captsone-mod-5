import React from 'react';
import { Card, Typography, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
const Register = () => {
  const handleRegister = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Card className="form-container" >
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

          <Form.Item>
            <Button 
            type="primary" 
            htmlType="submit"
            size="large"
            block
            className='btn'>
              Create Account
            </Button>
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
      </Card>
    </div>
  );
};

export default Register;
