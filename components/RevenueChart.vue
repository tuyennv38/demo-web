<!-- 
  @implements task:add-revenue-chart-0006
  @implements feature:revenue-chart-0004
-->
<template>
  <div class="revenue-chart-container">
    <div class="chart-header">
      <h3 class="chart-title">Revenue (Last 7 Days)</h3>
      <div class="chart-actions">
        <select class="date-selector">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>
    </div>
    
    <div class="chart-body">
      <ClientOnly>
        <Line :data="chartData" :options="chartOptions" />
        <template #fallback>
          <div class="chart-loading">Loading chart data...</div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Generate 7 days labels
const generateLabels = () => {
  const labels = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    labels.push(d.toLocaleDateString('vi-VN', { weekday: 'short', day: 'numeric', month: 'numeric' }))
  }
  return labels
}

// Mock Data
const revenueData = [12000000, 15500000, 11000000, 18000000, 22000000, 19500000, 25000000]

const chartData = computed(() => ({
  labels: generateLabels(),
  datasets: [
    {
      label: 'Revenue (VNĐ)',
      backgroundColor: 'rgba(99, 102, 241, 0.2)', // primary color with opacity
      borderColor: '#6366f1',
      borderWidth: 2,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#6366f1',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: true,
      data: revenueData,
      tension: 0.4 // smooth curve
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      titleFont: { size: 13, family: 'Inter' },
      bodyFont: { size: 14, family: 'Inter', weight: 'bold' },
      padding: 12,
      cornerRadius: 8,
      displayColors: false,
      callbacks: {
        label: (context: any) => {
          let label = context.dataset.label || ''
          if (label) {
            label += ': '
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(context.parsed.y)
          }
          return label
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(226, 232, 240, 0.6)',
        drawBorder: false,
      },
      ticks: {
        font: { family: 'Inter', size: 11 },
        color: '#64748b',
        callback: (value: any) => {
          if (value >= 1000000) {
            return value / 1000000 + 'M ₫'
          }
          return value + ' ₫'
        }
      }
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: { family: 'Inter', size: 11 },
        color: '#64748b'
      }
    }
  },
  interaction: {
    intersect: false,
    mode: 'index' as const,
  },
}
</script>

<style scoped>
.revenue-chart-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.chart-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.date-selector {
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-secondary);
  font-family: var(--font-family-body);
  font-size: 0.85rem;
  outline: none;
  cursor: pointer;
}

.chart-body {
  position: relative;
  flex: 1;
  min-height: 300px;
  width: 100%;
}

.chart-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-weight: 500;
}
</style>
