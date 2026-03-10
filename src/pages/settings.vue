<!-- 
  @implements task:add-placeholder-pages-0008
  @implements feature:dashboard-page-0003
-->
<template>
  <div class="placeholder-page animate-fade-in">
    <div class="glass glass-card page-card">
      <div class="icon-wrapper">
        <span class="icon">⚙️</span>
      </div>
      <h2>System Settings</h2>
      <p class="description">This feature is currently under development. Global configuration and preferences will be available here.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.placeholder-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 60vh;
}

.page-card {
  text-align: center;
  padding: 4rem 2rem;
  max-width: 540px;
}

.icon-wrapper {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  animation: spinSlow 8s linear infinite;
}

h2 {
  color: var(--text-primary);
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.05rem;
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
