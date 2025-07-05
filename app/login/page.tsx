'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'
import { useState } from 'react'
import styles from './login.module.scss'

type FormData = {
  username: string
  password: string
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const [authError, setAuthError] = useState('')
  const login = useAuthStore((state) => state.login)
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    setAuthError('')
    try {
      await login(data)
      router.push('/products')
    } catch {
      setAuthError('Login failed. Please check your credentials.')
    }
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.login_title}>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
        <div className={styles.login_form_container}>
          <input
            type="text"
            placeholder="Username"
            {...register('username', {
              required: 'Enter your username',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters',
              },
            })}
            className={styles.login_form_container_input}
          />
          {errors.username && (
            <p className={styles.login_form_container_error}>
              {errors.username.message}
            </p>
          )}
        </div>

        <div className={styles.login_form_container}>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Enter your password',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters',
              },
            })}
            className={styles.login_form_container_input}
          />
          {errors.password && (
            <p className={styles.login_form_container_error}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.login_form_btn}
        >
          {isSubmitting ? 'Loading...' : 'Login'}
        </button>

        {authError && (
          <p className={styles.login_form_container_error}>{authError}</p>
        )}
      </form>
    </div>
  )
}
