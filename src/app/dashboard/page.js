/**
 * @implements task:build-dashboard-page-0005
 * @implements feature:dashboard-page-0003
 * 
 * Dashboard Page — displays revenue chart and logout button, protected by auth guard
 */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import LogoutButton from '@/components/LogoutButton';
import RevenueChart from '@/components/RevenueChart';

export default function DashboardPage() {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.replace('/login');
        } else {
            setChecking(false);
        }
    }, [router]);

    if (checking) return null;

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <LogoutButton />
            </header>
            <main className="dashboard-content">
                <RevenueChart />
            </main>
        </div>
    );
}
