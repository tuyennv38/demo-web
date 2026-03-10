// @implements task:implement-auth-middleware-0003
// @implements feature:routing-guard-0001
export default defineNuxtRouteMiddleware((to, from) => {
    // Auth checks using localStorage can only be performed on the client-side
    if (import.meta.server) return

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

    // Redirect to login if not authenticated and trying to access a protected route
    if (!isAuthenticated && to.path !== '/login') {
        return navigateTo('/login')
    }

    // Redirect to dashboard if authenticated and trying to access login
    if (isAuthenticated && to.path === '/login') {
        return navigateTo('/')
    }
})
