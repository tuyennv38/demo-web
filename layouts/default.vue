<!-- 
  @implements task:build-dashboard-layout-0005
  @implements feature:dashboard-page-0003
-->
<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <aside class="sidebar glass" :class="{ 'sidebar-open': isMobileMenuOpen }">
      <div class="sidebar-header">
        <h2 class="logo-title">Demo<span class="text-primary">App</span></h2>
        <button class="mobile-close-btn" @click="isMobileMenuOpen = false">×</button>
      </div>
      
      <nav class="sidebar-nav">
        <NuxtLink to="/" class="nav-item" active-class="nav-item-active" @click="isMobileMenuOpen = false">
          <span class="icon">📊</span>
          <span class="label">Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/users" class="nav-item" active-class="nav-item-active" @click="isMobileMenuOpen = false">
          <span class="icon">👥</span>
          <span class="label">Users</span>
        </NuxtLink>
        <NuxtLink to="/settings" class="nav-item" active-class="nav-item-active" @click="isMobileMenuOpen = false">
          <span class="icon">⚙️</span>
          <span class="label">Settings</span>
        </NuxtLink>
      </nav>
      
      <div class="sidebar-footer">
        <div class="version-info">v1.0.0-prototype</div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Top header -->
      <header class="top-header glass">
        <div class="header-left">
          <button class="mobile-menu-btn" @click="isMobileMenuOpen = true">
            ☰
          </button>
          <h1 class="page-title">{{ pageTitle }}</h1>
        </div>
        
        <div class="header-right">
          <ClientOnly>
            <UserInfo />
          </ClientOnly>
        </div>
      </header>

      <!-- Page Content Layout Area -->
      <div class="page-wrapper animate-fade-in">
        <slot />
      </div>
    </main>

    <!-- Mobile overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-overlay" 
      @click="isMobileMenuOpen = false"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

// Determine page title based on route name or path
const pageTitle = computed(() => {
  if (route.path === '/') return 'Dashboard Overview'
  if (route.path.startsWith('/users')) return 'User Management'
  if (route.path.startsWith('/settings')) return 'Settings'
  return 'Console'
})
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-color);
  overflow: hidden;
}

/* Sidebar Styling */
.sidebar {
  width: 260px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal);
  border-radius: 0; /* Override generic glass radius for layout edge */
  border-right: 1px solid var(--border-color);
}

.sidebar-header {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--border-light);
}

.logo-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
}

.text-primary {
  color: var(--primary-color);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sidebar-nav {
  flex: 1;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.nav-item:hover {
  background-color: var(--surface-hover);
  color: var(--text-primary);
  transform: translateX(4px);
}

.nav-item-active {
  background: var(--primary-light);
  color: var(--primary-color);
}

.nav-item-active:hover {
  background: var(--primary-light);
  transform: none;
}

.icon {
  font-size: 1.25rem;
}

.sidebar-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-light);
  color: var(--text-tertiary);
  font-size: 0.8rem;
}

.mobile-close-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-secondary);
  cursor: pointer;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header Styling */
.top-header {
  height: 72px;
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.85); /* Slightly opaque glass */
  border-bottom: 1px solid var(--border-color);
  border-radius: 0;
  box-shadow: var(--shadow-sm);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.25rem;
}

.page-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary);
}

.header-right {
  display: flex;
  align-items: center;
}

/* Page Wrapper */
.page-wrapper {
  padding: 2rem;
  flex: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  
  .sidebar-open {
    transform: translateX(0);
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .mobile-menu-btn, .mobile-close-btn {
    display: block;
  }
  
  .mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(15, 23, 42, 0.5);
    z-index: 35;
    backdrop-filter: blur(4px);
  }
  
  .page-wrapper {
    padding: 1.25rem;
  }
}
</style>
