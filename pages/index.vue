<template>
  <div class="dashboard-wrapper">
    <div class="dashboard-content">
      <div class="glass glass-card stat-card animate-fade-in" style="animation-delay: 0.1s">
        <h3>Active Users</h3>
        <p class="stat-value">1,234</p>
      </div>
      <div class="glass glass-card stat-card animate-fade-in" style="animation-delay: 0.2s">
        <h3>Total Revenue</h3>
        <p class="stat-value">₫ 45,670,000</p>
      </div>
      <div class="glass glass-card stat-card animate-fade-in" style="animation-delay: 0.3s">
        <h3>New Orders</h3>
        <p class="stat-value">89</p>
      </div>
    </div>

    <div class="chart-section animate-fade-in" style="animation-delay: 0.4s">
      <div class="glass glass-card chart-card">
        <RevenueChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @implements task:build-dashboard-layout-0005
// @implements feature:dashboard-page-0003
</script>

<style scoped>
.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.dashboard-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-card h3 {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.chart-section {
  width: 100%;
}

.chart-card {
  padding: 1.5rem;
  height: 400px;
}
</style>
