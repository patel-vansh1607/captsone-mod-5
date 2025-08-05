import React from "react";
import { Typography, Form, Input, Button, Alert, Spin, Flex } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useSignup from "../hooks/useSignUp";
import "../styles/Register.css";

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <div className="register-page">
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography.Title level={3} className="title">
          <strong>Create an account</strong>
        </Typography.Title>
        <Typography.Text className="slogan">
          Join for exclusive access!
        </Typography.Text>

        <Form
          layout="vertical"
          onFinish={handleRegister}
          autoComplete="off"
          style={{ marginTop: 20 }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input size="large" placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email address" },
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

          <Form.Item
            label="Confirm Password"
            name="passwordConfirm"
            rules={[
              { required: true, message: "Please confirm your password" },
            ]}
          >
            <Input.Password size="large" placeholder="Re-enter your password" />
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
              {loading ? <Spin /> : "Create Account"}
            </Button>
          </Form.Item>

          <Form.Item>
            <Link to="/login">
              <Button size="large" block className="btn">
                Sign In
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

export default Register;
