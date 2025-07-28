import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { message } from 'antd';

const useSignUp = () => {
  const { login } = useAuth()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const registerUser = async ({ name, email, password, passwordConfirm }) => {
    if (password !== passwordConfirm) {
      return setError("Passwords do not match")
    }

    try {
      setError(null)
      setLoading(true)

      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json()

      if (res.status === 201) {
        message.success(data.message)
        login(data.token, data.user)
      } else if (res.status === 400) {
        setError(data.message)
      } else {
        message.error("Registration failed")
      }

    } catch (error) {
      message.error(error.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, registerUser }
}

export default useSignUp
