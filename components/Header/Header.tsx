'use client'

import Link from 'next/link'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'
import styles from './header.module.scss'

export default function Header() {
  const { user, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <Link href="/testwork7621/public" className={styles.header_content_link}>
          TestWork7621
        </Link>

        {user ? (
          <div className={styles.header_content_user}>
            <span className={styles.header_content_user_name}>
              {user.firstName} {user.lastName}
            </span>
            <button
              onClick={handleLogout}
              className={styles.header_content_user_btn}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className={styles.header_content_login}
          >
            Login
          </Link>
        )}
      </div>
    </header>
  )
}
