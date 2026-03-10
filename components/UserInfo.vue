<!-- 
  @implements task:add-user-info-header-0007
  @implements feature:user-info-display-0005
-->
<template>
  <div class="user-info-container">
    <div class="user-profile" @click="toggleDropdown">
      <div class="avatar">
        {{ userInitial }}
      </div>
      <div class="user-details">
        <span class="user-name">{{ userName }}</span>
        <span class="user-role">{{ userRole }}</span>
      </div>
      <span class="dropdown-icon" :class="{ 'rotate': isDropdownOpen }">▼</span>
    </div>

    <!-- Dropdown Menu -->
    <div v-if="isDropdownOpen" class="dropdown-menu glass animate-fade-in">
      <div class="dropdown-header">
        <p class="dropdown-email">{{ userEmail }}</p>
      </div>
      <div class="dropdown-divider"></div>
      <button class="dropdown-item text-error" @click="handleLogout">
        <span class="icon">🚪</span> Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDropdownOpen = ref(false)
const userEmail = ref('Guest')
const userRole = ref('Visitor')

const userName = computed(() => {
  return userEmail.value.split('@')[0]
})

const userInitial = computed(() => {
  return userName.value.charAt(0).toUpperCase()
})

const toggleDropdown = (e: MouseEvent) => {
  e.stopPropagation()
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const handleLogout = () => {
  if (import.meta.client) {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
  }
  router.push('/login')
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
  
  if (import.meta.client) {
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        const parsed = JSON.parse(userData)
        userEmail.value = parsed.email || 'admin@example.com'
        userRole.value = parsed.role || 'Admin'
      } catch (e) {
        // Fallback
      }
    }
  }
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.user-info-container {
  position: relative;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.user-profile:hover {
  background-color: var(--surface-hover);
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: var(--shadow-sm);
}

.user-details {
  display: flex;
  flex-direction: column;
}

@media (max-width: 640px) {
  .user-details {
    display: none;
  }
}

.user-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.2;
  text-transform: capitalize;
}

.user-role {
  font-size: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.2;
}

.dropdown-icon {
  font-size: 0.7rem;
  color: var(--text-secondary);
  transition: transform var(--transition-fast);
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  width: 220px;
  padding: 0.5rem;
  z-index: 50;
  transform-origin: top right;
}

.dropdown-header {
  padding: 0.75rem 1rem;
}

.dropdown-email {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
  word-break: break-all;
}

.dropdown-divider {
  height: 1px;
  background-color: var(--border-color);
  margin: 0.25rem 0;
}

.dropdown-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  font-family: var(--font-family-body);
  color: var(--text-primary);
  cursor: pointer;
  text-align: left;
  transition: background-color var(--transition-fast);
}

.dropdown-item:hover {
  background-color: var(--surface-hover);
}

.text-error {
  color: var(--error-color);
}

.text-error:hover {
  background-color: rgba(239, 68, 68, 0.1);
}
</style>
