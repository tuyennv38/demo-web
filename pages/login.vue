<!-- 
  @implements task:build-login-page-0004
  @implements feature:login-page-0002
-->
<template>
  <div class="login-wrapper">
    <div class="glass glass-card login-container animate-fade-in">
      <div class="login-header">
        <h1 class="logo-title">Demo<span class="text-primary">App</span></h1>
        <p class="subtitle">Enter your credentials to access the dashboard</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            class="input-base" 
            :class="{ 'input-error': emailError }"
            placeholder="admin@example.com"
            @input="validateEmail"
          />
          <span v-if="emailError" class="error-text animate-fade-in">{{ emailError }}</span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            class="input-base"
            :class="{ 'input-error': passwordError }"
            placeholder="••••••••"
            @input="validatePassword"
          />
          <span v-if="passwordError" class="error-text animate-fade-in">{{ passwordError }}</span>
        </div>

        <div v-if="loginError" class="form-error-banner animate-fade-in">
          {{ loginError }}
        </div>

        <button type="submit" class="btn-primary login-btn" :disabled="isLoading">
          <span v-if="!isLoading">Sign In</span>
          <span v-else class="loader"></span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
const loginError = ref('')
const isLoading = ref(false)

const validateEmail = () => {
  emailError.value = ''
  if (!email.value) {
    emailError.value = 'Email is required'
    return false
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Please enter a valid email address'
    return false
  }
  return true
}

const validatePassword = () => {
  passwordError.value = ''
  if (!password.value) {
    passwordError.value = 'Password is required'
    return false
  }
  if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters'
    return false
  }
  return true
}

const handleLogin = async () => {
  // Clear previous global errors
  loginError.value = ''
  
  const isEmailValid = validateEmail()
  const isPasswordValid = validatePassword()

  if (!isEmailValid || !isPasswordValid) return

  isLoading.value = true

  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 800))

  // Hardcoded check for demo purposes
  if (email.value === 'admin@example.com' && password.value === 'password123') {
    // Save to localStorage
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('user', JSON.stringify({ email: email.value, role: 'admin' }))
    
    // Redirect to dashboard
    router.push('/')
  } else {
    // Display error
    loginError.value = 'Invalid email or password. Use admin@example.com / password123'
  }

  isLoading.value = false
}
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.login-container {
  width: 100%;
  max-width: 440px;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.85); /* Slightly more opaque glass */
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.text-primary {
  color: var(--primary-color);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.input-base {
  height: 2.75rem;
}

.input-error {
  border-color: var(--error-color);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15); /* error color slight glow */
}

.error-text {
  color: var(--error-color);
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.form-error-banner {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error-color);
  padding: 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  text-align: center;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.login-btn {
  margin-top: 1rem;
  height: 3rem;
  font-size: 1rem;
}

/* Simple Loader */
.loader {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
