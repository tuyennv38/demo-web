/**
 * @implements task:build-dashboard-page-0003
 * @implements feature:dashboard-page-0003
 * 
 * RevenueChart component — 7-day revenue area chart with random mock data
 */
'use client';

import { useMemo } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

/**
 * Generate random revenue data for the last 7 days
 */
function generateRevenueData() {
    const data = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);

        const day = date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
        });

        // Random revenue between 5,000,000 and 45,000,000 VNĐ
        const revenue = Math.floor(Math.random() * 40_000_000) + 5_000_000;

        data.push({ day, revenue });
    }

    return data;
}

/**
 * Format number to VNĐ currency string
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0,
    }).format(value);
}

/**
 * Custom tooltip component for the chart
 */
function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    background: 'rgba(18, 18, 26, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <p style={{ color: '#8a8a9a', fontSize: '12px', marginBottom: '4px' }}>
                    {label}
                </p>
                <p style={{ color: '#f0f0f5', fontSize: '16px', fontWeight: 600 }}>
                    {formatCurrency(payload[0].value)}
                </p>
            </div>
        );
    }
    return null;
}

export default function RevenueChart() {
    const data = useMemo(() => generateRevenueData(), []);

    // Calculate stats
    const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
    const avgRevenue = Math.floor(totalRevenue / data.length);
    const maxRevenue = Math.max(...data.map((d) => d.revenue));

    return (
        <>
            {/* Stats Row */}
            <div className="stats-row">
                <div className="stat-card">
                    <div className="stat-label">Tổng doanh thu 7 ngày</div>
                    <div className="stat-value">{formatCurrency(totalRevenue)}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Trung bình / ngày</div>
                    <div className="stat-value">{formatCurrency(avgRevenue)}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Cao nhất</div>
                    <div className="stat-value">{formatCurrency(maxRevenue)}</div>
                </div>
            </div>

            {/* Chart */}
            <div className="chart-card">
                <div className="chart-card-header">
                    <h2>📊 Biểu đồ doanh thu</h2>
                    <p>Doanh thu 7 ngày gần nhất (dữ liệu giả lập)</p>
                </div>
                <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0.02} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="rgba(255, 255, 255, 0.06)"
                                vertical={false}
                            />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#8a8a9a', fontSize: 12 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#8a8a9a', fontSize: 12 }}
                                tickFormatter={(val) =>
                                    val >= 1_000_000 ? `${(val / 1_000_000).toFixed(0)}M` : val
                                }
                                width={45}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#6366f1"
                                strokeWidth={2.5}
                                fill="url(#revenueGradient)"
                                dot={{
                                    fill: '#6366f1',
                                    stroke: '#0a0a0f',
                                    strokeWidth: 2,
                                    r: 4,
                                }}
                                activeDot={{
                                    fill: '#8b5cf6',
                                    stroke: '#0a0a0f',
                                    strokeWidth: 2,
                                    r: 6,
                                }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
}
