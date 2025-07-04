import { create } from 'zustand'
import axios from 'axios'

interface User {
  firstName: string
  lastName: string
  email: string
  token: string
}

interface LoginPayload {
  username: string
  password: string
}

interface AuthState {
  user: User | null
  token: string | null
  login: (payload: LoginPayload) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: async ({ username, password }) => {
    const res = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
    })

    const user = res.data
    set({ user, token: user.token })
  },

  logout: () => {
    set({ user: null, token: null })
  },
}))
