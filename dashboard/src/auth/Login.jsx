import React from "react";
import { Card, Typography, Form, Input, Button, Flex, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import loginimage from "../assets/images.jpeg";
import useLogin from "../hooks/useLogin";
import "../styles/Login.css";

const Login = () => {
  const { error, loading, loginUser } = useLogin();

  const handleLogin = async (values) => {
    await loginUser(values);
  };

  return (
    <div className="login-page">
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography.Title level={3} className="title">
          <strong>Sign In</strong>
        </Typography.Title>
        <Typography.Text className="slogan">Unlock your world!</Typography.Text>

        <Form
          layout="vertical"
          onFinish={handleLogin}
          autoComplete="off"
          style={{ marginTop: 20 }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "The input is not a valid E-mail!" },
            ]}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
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
              type={loading ? "" : "primary"}
              htmlType="submit"
              size="large"
              block
              className="btn"
            >
              {loading ? <Spin /> : "Sign In"}
            </Button>
          </Form.Item>

          <Form.Item>
            <Link to="/register">
              <Button size="large" block className="btn">
                Create an Account
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

export default Login;
