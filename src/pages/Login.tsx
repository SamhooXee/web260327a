/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { AlertCircle, Loader2 } from 'lucide-react'

export function Login() {
  const navigate = useNavigate()
  const { login, loading, error, clearError } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errors: Record<string, string> = {}

    if (!formData.email.trim()) {
      errors.email = '请输入邮箱'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = '请输入有效的邮箱地址'
    }

    if (!formData.password) {
      errors.password = '请输入密码'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (error) clearError()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    const result = await login({
      email: formData.email,
      password: formData.password
    })

    if (result.success) {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">登录</h1>
          <p className="text-on-surface-variant">欢迎回到 Astra Global</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 rounded-2xl shadow-lg">
          {error && (
            <div className="flex items-center gap-2 p-3 mb-6 bg-error-container text-error rounded-xl">
              <AlertCircle size={18} />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-1.5">
                邮箱
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-surface text-on-surface rounded-xl border ${
                  validationErrors.email ? 'border-error' : 'border-outline'
                } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                placeholder="example@email.com"
              />
              {validationErrors.email && (
                <p className="mt-1 text-xs text-error">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-on-surface mb-1.5">
                密码
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-surface text-on-surface rounded-xl border ${
                  validationErrors.password ? 'border-error' : 'border-outline'
                } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                placeholder="请输入密码"
              />
              {validationErrors.password && (
                <p className="mt-1 text-xs text-error">{validationErrors.password}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-primary text-on-primary px-6 py-3 rounded-xl font-headline font-bold text-sm uppercase active:scale-[0.98] transition-transform hover:bg-primary-fixed-dim disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            {loading ? '登录中...' : '登录'}
          </button>

          <p className="mt-6 text-center text-sm text-on-surface-variant">
            还没有账户？{' '}
            <Link to="/register" className="text-primary hover:underline font-medium">
              立即注册
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}