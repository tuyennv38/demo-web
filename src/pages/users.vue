<!-- 
  @implements task:add-placeholder-pages-0008
  @implements feature:dashboard-page-0003
-->
<template>
  <div class="placeholder-page animate-fade-in">
    <div class="glass glass-card page-card">
      <div class="icon-wrapper">
        <span class="icon">👥</span>
      </div>
      <h2>User Management</h2>
      <p class="description">This feature is currently under development. It will soon provide comprehensive tools to manage user accounts, assign roles, and configure system permissions.</p>
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
  animation: float 3s ease-in-out infinite;
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

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
</style>
