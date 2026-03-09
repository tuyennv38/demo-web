/**
 * @implements task:implement-routing-0003
 * @implements feature:routing-0001
 * 
 * Auth helpers — client-side authentication using localStorage
 */

const AUTH_KEY = 'isAuthenticated';

/**
 * Mark user as logged in
 */
export function login() {
    if (typeof window !== 'undefined') {
        localStorage.setItem(AUTH_KEY, 'true');
    }
}

/**
 * Mark user as logged out
 */
export function logout() {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(AUTH_KEY);
    }
}

/**
 * Check if user is currently authenticated
 * @returns {boolean}
 */
export function isAuthenticated() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(AUTH_KEY) === 'true';
    }
    return false;
}
