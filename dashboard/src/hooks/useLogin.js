import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { message } from 'antd';

const useLogin = () => {
  const { login } = useAuth()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const loginUser = async (values) => {
    const { email, password } = values; // ✅ FIX HERE

    try {
      setError(null)
      setLoading(true)

      const res = await fetch('https://login-backend-svdi.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        });


      const data = await res.json()

      if (res.status === 201) {
        message.success(data.message)
        login(data.token, data.user)
      } else if (res.status === 400) {
        setError(data.message)
      } else {
        message.error("Login failed")
      }

    } catch (error) {
      message.error(error.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, loginUser }
}

export default useLogin
