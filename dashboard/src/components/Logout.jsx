import React, { useState } from 'react';
import {
  Avatar,
  Dropdown,
  Typography,
  Modal,
  Form,
  Input,
  Upload,
  Button,
  message,
} from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  LogoutOutlined,
  EditOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { useAuth } from '../context/AuthProvider';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const Logout = () => {
  const { userData, logout, login } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [logoutConfirmVisible, setLogoutConfirmVisible] = useState(false);
  const [form] = Form.useForm();

  const confirmLogout = () => {
    logout();
    setLogoutConfirmVisible(false);
    message.success('Logged out successfully');
  };

  const handleUpdate = async (values) => {
    const updated = { ...userData };
    const file = values?.profilePhoto?.[0]?.originFileObj;

    if (file) {
      try {
        updated.profilePhoto = await getBase64(file);
      } catch (err) {
        message.error('Failed to upload image');
        return;
      }
    }

    updated.name = values.name || userData.name;

    const token = JSON.parse(localStorage.getItem('user_data'))?.userToken;
    login(token, updated);

    localStorage.setItem('user_data', JSON.stringify({ userToken: token, user: updated }));
    message.success('Profile updated successfully');
    setModalVisible(false);
  };

  const menuItems = [
    {
      key: 'edit',
      icon: <EditOutlined />,
      label: 'Edit Profile',
      onClick: () => setModalVisible(true),
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      danger: true,
      label: 'Logout',
      onClick: () => setLogoutConfirmVisible(true),
    },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Dropdown menu={{ items: menuItems }} placement="bottom" trigger={['click']}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          {userData?.profilePhoto ? (
            <Avatar src={userData.profilePhoto} size={64} />
          ) : (
            <Avatar icon={<UserOutlined />} size={64} />
          )}
          <Typography.Text style={{ marginLeft: 12, fontSize: 18 }}>
            {userData?.name || 'User'}
          </Typography.Text>
          <DownOutlined style={{ marginLeft: 8 }} />
        </div>
      </Dropdown>


      <Modal
        title="Edit Profile"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
        okText="Save"
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ name: userData?.name }}
          onFinish={handleUpdate}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Profile Photo" name="profilePhoto" valuePropName="fileList">
            <Upload beforeUpload={() => false} listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>


      <Modal
        title="Confirm Logout"
        open={logoutConfirmVisible}
        onOk={confirmLogout}
        onCancel={() => setLogoutConfirmVisible(false)}
        okText="Logout"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </div>
  );
};

export default Logout;
