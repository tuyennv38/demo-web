/**
 * @implements task:build-dashboard-page-0003
 * @implements feature:dashboard-page-0003
 * 
 * LogoutButton component — clears auth state and redirects to /login
 */
'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';

export default function LogoutButton() {
    const router = useRouter();

    function handleLogout() {
        logout();
        router.push('/login');
    }

    return (
        <button className="btn-logout" onClick={handleLogout} id="logout-button">
            Đăng xuất
        </button>
    );
}
