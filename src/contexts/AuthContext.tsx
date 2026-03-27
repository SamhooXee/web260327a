/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { User, RegisterInput, LoginInput } from '../lib/types'
import { authApi } from '../lib/api/auth'

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

interface AuthContextType extends AuthState {
  isAuthenticated: boolean
  register: (input: RegisterInput) => Promise<{ success: boolean; error?: string }>
  login: (input: LoginInput) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null
  })

  // Load user from session on mount
  useEffect(() => {
    const loadUser = async () => {
      const user = await authApi.getCurrentUser()
      setState(prev => ({ ...prev, user, loading: false }))
    }
    loadUser()
  }, [])

  const register = useCallback(async (input: RegisterInput) => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    const { user, error } = await authApi.register(input)

    if (error) {
      setState(prev => ({ ...prev, loading: false, error }))
      return { success: false, error }
    }

    if (user) {
      await authApi.storeSession(user)
      setState({ user, loading: false, error: null })
    }

    return { success: true }
  }, [])

  const login = useCallback(async (input: LoginInput) => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    const { user, error } = await authApi.login(input)

    if (error) {
      setState(prev => ({ ...prev, loading: false, error }))
      return { success: false, error }
    }

    if (user) {
      await authApi.storeSession(user)
      setState({ user, loading: false, error: null })
    }

    return { success: true }
  }, [])

  const logout = useCallback(async () => {
    await authApi.clearSession()
    setState({ user: null, loading: false, error: null })
  }, [])

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }))
  }, [])

  const value: AuthContextType = {
    ...state,
    isAuthenticated: !!state.user,
    register,
    login,
    logout,
    clearError
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}