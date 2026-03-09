/**
 * @implements task:setup-routing-0001
 * @implements feature:routing-0001
 * 
 * Root page — redirects to /login or /dashboard based on auth state
 */
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated()) {
            router.replace('/dashboard');
        } else {
            router.replace('/login');
        }
    }, [router]);

    return null;
}
