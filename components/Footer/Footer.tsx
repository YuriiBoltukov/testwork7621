'use client'

import { useAuthStore } from '@/store/authStore';
import styles from './footer.module.scss'

export default function Footer() {
  const { user } = useAuthStore()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_info}>
        <span className={styles.footer_year}>{year}</span>
        {user && (
          <span className={styles.footer_user}>
            • Logged as {user.email}
          </span>
        )}
      </div>
    </footer>
  )
}
