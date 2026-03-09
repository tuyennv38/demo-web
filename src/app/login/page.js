/**
 * @implements task:build-login-page-0002
 * @implements feature:login-page-0002
 * 
 * Login Page — renders LoginForm, redirects to /dashboard if already logged in
 */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        if (isAuthenticated()) {
            router.replace('/dashboard');
        } else {
            setChecking(false);
        }
    }, [router]);

    if (checking) return null;

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Đăng nhập</h1>
                    <p>Chào mừng bạn trở lại</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
