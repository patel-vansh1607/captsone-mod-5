import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';


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
  ThunderboltOutlined,
} from '@ant-design/icons';

import {
  MdOutlineTaskAlt,
  MdPendingActions,
  MdAddTask,
  MdCloudDone,
  MdOutlineAccessTimeFilled,
  MdQueryStats,
} from 'react-icons/md';
import { GrInProgress } from 'react-icons/gr';

// Convert image to base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const Sidebar = () => {
  const { userData, logout, login } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [logoutConfirmVisible, setLogoutConfirmVisible] = useState(false);
  const [form] = Form.useForm();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
    useEffect(() => {
    if (isDashboard) {
        toast.success(`🎉 Welcome to your Dashboard, ${userData?.name || 'User'}!`, {
        position: 'top-right',
        autoClose: 3000,
        });
    }
    }, [isDashboard, userData?.name]);
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

    localStorage.setItem(
      'user_data',
      JSON.stringify({ userToken: token, user: updated })
    );
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
<>
    <motion.div
      className="bg-indigo-500 min-h-screen w-[5rem] sm:w-[14rem] flex flex-col gap-4 poppins-regular text-white"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Welcome Message */}
      {isDashboard && (
        <motion.div
          className="px-4 pt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white text-sm sm:text-base font-semibold">
            👋 Welcome, {userData?.name || 'User'}!
          </p>
        </motion.div>
      )}

      {/* Profile Section */}
      <div className="mb-1 px-4">
        <Dropdown menu={{ items: menuItems }} placement="top" trigger={['click']}>
          <div className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-indigo-600 rounded-lg transition-all duration-200">
            {userData?.profilePhoto ? (
              <Avatar src={userData.profilePhoto} size="large" />
            ) : (
              <Avatar icon={<UserOutlined />} size="large" />
            )}
            <div className="sm:block hidden">
              <Typography.Text className="text-white text-base">
                {userData?.name || 'User'}
              </Typography.Text>
              <DownOutlined className="ml-2 text-white" />
            </div>
          </div>
        </Dropdown>
      </div>

      {/* Edit Profile Modal */}
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
        </Form>
      </Modal>

      {/* Logout Modal */}
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

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="-mt-4 flex flex-col justify-center">
          {[
            {
              to: '/completeTask',
              icon: <MdOutlineTaskAlt className="text-2xl" />,
              text: 'Completed Tasks',
            },
            {
              to: '/pendingTask',
              icon: <MdPendingActions className="text-2xl" />,
              text: 'Pending Tasks',
            },
            {
              to: '/inProgressTask',
              icon: <GrInProgress className="text-2xl" />,
              text: 'In Progress Tasks',
            },
            {
              to: '/deployedTask',
              icon: <MdCloudDone className="text-2xl" />,
              text: 'Deployed Tasks',
            },
            {
              to: '/deferredTask',
              icon: <MdOutlineAccessTimeFilled className="text-2xl" />,
              text: 'Deferred Tasks',
            },
            {
              to: '/addTask',
              icon: <MdAddTask className="text-2xl" />,
              text: 'Add New Tasks',
            },
            {
              to: '/statsTask',
              icon: <MdQueryStats className="text-2xl" />,
              text: 'Task Stats',
            },
            {
              to: '/tasksAI',
              icon: <ThunderboltOutlined className="text-2xl" />,
              text: 'Tasks AI Helper',
            },{
              to: '/pomodro',
              icon: <ThunderboltOutlined className="text-2xl" />,
              text: 'Pomodro',
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={item.to}
                className="px-6 py-4 text-lg text-gray-300 hover:text-white flex items-center gap-2"
              >
                {item.icon}
                <span className="sm:block hidden">{item.text}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
    <ToastContainer />
</>
  );
};

export default Sidebar;
