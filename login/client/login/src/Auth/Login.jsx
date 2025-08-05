import React from "react";
import { Card, Typography, Form, Input, Button, Flex, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import loginimage from "../assets/images.jpeg";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { error, loading, loginUser } = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        <Flex flex={1}>
          <img src={loginimage} className="auth-image" />
        </Flex>
        <Flex vertical flex={1}>
          <Typography.Title level={3} className="title">
            <strong>Sign In</strong>
          </Typography.Title>
          <Typography.Text type="secondary" className="slogan">
            Unlock your world!
          </Typography.Text>

          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                {
                  type: "email",
                  message: "The input is not a valid E-mail!",
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
                  message: "Please enter your password",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                block
                className="btn"
              >
                {loading ? <Spin /> : "Sign In "}
              </Button>
            </Form.Item>

            <Form.Item>
              <Link to="/">
                <Button size="large" block className="btn">
                  Create an Account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Login;
