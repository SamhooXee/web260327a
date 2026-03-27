/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { supabase } from '../supabase'
import type { User, RegisterInput, LoginInput } from '../types'

// Simple password hashing using Web Crypto API (SHA-256)
// NOTE: In production, password hashing should be done on a backend server
// This is a demo implementation for client-side only apps
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password)
  return passwordHash === hash
}

export const authApi = {
  async register(input: RegisterInput): Promise<{ user: User | null; error: string | null }> {
    try {
      // Check if email already exists
      const { data: existingUser } = await supabase
        .from('w260327a_users')
        .select('email')
        .eq('email', input.email)
        .single()

      if (existingUser) {
        return { user: null, error: '该邮箱已被注册' }
      }

      // Hash the password
      const password_hash = await hashPassword(input.password)

      // Create user record
      const { data, error } = await supabase
        .from('w260327a_users')
        .insert({
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          organization: input.organization || null,
          password_hash
        })
        .select()
        .single()

      if (error) {
        return { user: null, error: error.message }
      }

      return { user: data, error: null }
    } catch (err) {
      return { user: null, error: '注册失败，请稍后重试' }
    }
  },

  async login(input: LoginInput): Promise<{ user: User | null; error: string | null }> {
    try {
      // Find user by email
      const { data: user, error } = await supabase
        .from('w260327a_users')
        .select('*')
        .eq('email', input.email)
        .single()

      if (error || !user) {
        return { user: null, error: '邮箱或密码错误' }
      }

      // Verify password
      const isValid = await verifyPassword(input.password, user.password_hash || '')

      if (!isValid) {
        return { user: null, error: '邮箱或密码错误' }
      }

      // Remove password_hash from returned user
      const { password_hash, ...userWithoutPassword } = user
      return { user: userWithoutPassword, error: null }
    } catch (err) {
      return { user: null, error: '登录失败，请稍后重试' }
    }
  },

  async getCurrentUser(): Promise<User | null> {
    const storedUser = localStorage.getItem('currentUser')
    if (!storedUser) return null

    try {
      return JSON.parse(storedUser) as User
    } catch {
      return null
    }
  },

  async storeSession(user: User): Promise<void> {
    localStorage.setItem('currentUser', JSON.stringify(user))
  },

  async clearSession(): Promise<void> {
    localStorage.removeItem('currentUser')
  }
}