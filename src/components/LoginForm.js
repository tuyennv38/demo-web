/**
 * @implements task:build-login-page-0002
 * @implements feature:login-page-0002
 * 
 * LoginForm component — email/password form with client-side validation
 */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/auth';

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    function validateForm() {
        const newErrors = {};

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = 'Email không hợp lệ';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Mật khẩu tối thiểu 6 ký tự';
        } else if (password.length < 6) {
            newErrors.password = 'Mật khẩu tối thiểu 6 ký tự';
        }

        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            login();
            router.push('/dashboard');
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                {errors.password && <span className="form-error">{errors.password}</span>}
            </div>

            <button type="submit" className="btn-login" id="login-button">
                Đăng nhập
            </button>
        </form>
    );
}
