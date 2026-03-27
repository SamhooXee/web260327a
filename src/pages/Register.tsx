/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { AlertCircle, Loader2 } from 'lucide-react'

export function Register() {
  const navigate = useNavigate()
  const { register, loading, error, clearError } = useAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    password: '',
    confirmPassword: ''
  })

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = '请输入姓名'
    }

    if (!formData.email.trim()) {
      errors.email = '请输入邮箱'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = '请输入有效的邮箱地址'
    }

    if (!formData.password) {
      errors.password = '请输入密码'
    } else if (formData.password.length < 6) {
      errors.password = '密码至少6个字符'
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = '两次输入的密码不一致'
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

    const result = await register({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      organization: formData.organization || undefined,
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
          <h1 className="text-3xl font-bold text-primary mb-2">立即注册</h1>
          <p className="text-on-surface-variant">创建您的 Astra Global 账户</p>
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
              <label htmlFor="name" className="block text-sm font-medium text-on-surface mb-1.5">
                姓名 <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-surface text-on-surface rounded-xl border ${
                  validationErrors.name ? 'border-error' : 'border-outline'
                } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                placeholder="请输入您的姓名"
              />
              {validationErrors.name && (
                <p className="mt-1 text-xs text-error">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-1.5">
                邮箱 <span className="text-error">*</span>
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
              <label htmlFor="phone" className="block text-sm font-medium text-on-surface mb-1.5">
                电话 <span className="text-on-surface-variant/50">(可选)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface text-on-surface rounded-xl border border-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="138xxxx8888"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-on-surface mb-1.5">
                组织/机构 <span className="text-on-surface-variant/50">(可选)</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface text-on-surface rounded-xl border border-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="您的所属机构"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-on-surface mb-1.5">
                密码 <span className="text-error">*</span>
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
                placeholder="至少6个字符"
              />
              {validationErrors.password && (
                <p className="mt-1 text-xs text-error">{validationErrors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-on-surface mb-1.5">
                确认密码 <span className="text-error">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-surface text-on-surface rounded-xl border ${
                  validationErrors.confirmPassword ? 'border-error' : 'border-outline'
                } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                placeholder="再次输入密码"
              />
              {validationErrors.confirmPassword && (
                <p className="mt-1 text-xs text-error">{validationErrors.confirmPassword}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-primary text-on-primary px-6 py-3 rounded-xl font-headline font-bold text-sm uppercase active:scale-[0.98] transition-transform hover:bg-primary-fixed-dim disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            {loading ? '注册中...' : '注册'}
          </button>

          <p className="mt-6 text-center text-sm text-on-surface-variant">
            已有账户？{' '}
            <Link to="/login" className="text-primary hover:underline font-medium">
              立即登录
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}