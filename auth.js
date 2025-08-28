/*
 * Copyright © 2024 Swaraj Pal Singh. All rights reserved.
 * This software and associated documentation files (the "Software") 
 * are owned and written by Swaraj Pal Singh for the DAIO project. 
 * The Software is proprietary and confidential.
 */

// Authentication System for DAIO
let currentUser = null;
let authToken = localStorage.getItem('daio_auth_token');

// Configuration
const DAIO_MVP_URL = 'http://localhost:3000';

// Helper function to redirect to daio.mvp
function redirectToDaioMVP() {
    // Store authentication data for daio.mvp
    localStorage.setItem('daio_mvp_auth_token', authToken);
    localStorage.setItem('daio_mvp_user', JSON.stringify(currentUser));
    
    // Redirect to daio.mvp application
    window.location.href = DAIO_MVP_URL;
}

// Initialize authentication
function initAuth() {
    console.log('🔐 Initializing authentication system...');
    
    // Check if user is already logged in
    if (authToken) {
        console.log('✅ User already authenticated, checking status...');
        checkAuthStatus();
        // If user is already authenticated, redirect to daio.mvp
        setTimeout(() => {
            redirectToDaioMVP();
        }, 1000);
    }
    
    // Add event listeners for auth buttons
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    
    console.log('🔍 Looking for auth buttons...');
    console.log('Login button found:', !!loginBtn);
    console.log('Signup button found:', !!signupBtn);
    
    if (loginBtn) {
        loginBtn.addEventListener('click', showLoginModal);
        console.log('✅ Login button event listener added');
    }
    if (signupBtn) {
        signupBtn.addEventListener('click', showSignupModal);
        console.log('✅ Signup button event listener added');
    }
    
    // Add event listeners for modal close buttons
    const loginModalClose = document.getElementById('loginModalClose');
    const signupModalClose = document.getElementById('signupModalClose');
    
    if (loginModalClose) loginModalClose.addEventListener('click', hideLoginModal);
    if (signupModalClose) signupModalClose.addEventListener('click', hideSignupModal);
    
    // Add event listeners for form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
    
    // Add event listeners for modal switches
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');
    
    if (showSignupLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideLoginModal();
            showSignupModal();
        });
    }
    
    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideSignupModal();
            showLoginModal();
        });
    }
    
    // Close modals when clicking outside
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target.id === 'loginModal') {
                hideLoginModal();
            }
        });
    }
    
    if (signupModal) {
        signupModal.addEventListener('click', (e) => {
            if (e.target.id === 'signupModal') {
                hideSignupModal();
            }
        });
    }
    
    // Close modals on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideLoginModal();
            hideSignupModal();
        }
    });
}

// Show/hide modals
function showLoginModal() {
    console.log('🔓 Showing login modal...');
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('✅ Login modal shown');
    } else {
        console.log('❌ Login modal not found!');
    }
}

function hideLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        clearAuthMessages();
    }
}

function showSignupModal() {
    console.log('🔓 Showing signup modal...');
    const modal = document.getElementById('signupModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('✅ Signup modal shown');
    } else {
        console.log('❌ Signup modal not found!');
    }
}

function hideSignupModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        clearAuthMessages();
    }
}

// Clear auth messages
function clearAuthMessages() {
    const messages = document.querySelectorAll('.auth-message');
    messages.forEach(msg => msg.remove());
}

// Show auth message
function showAuthMessage(message, type = 'error', formId = null) {
    clearAuthMessages();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `auth-message ${type}`;
    messageDiv.textContent = message;
    
    const form = formId ? document.getElementById(formId) : document.querySelector('.auth-form');
    if (form) {
        form.insertBefore(messageDiv, form.firstChild);
    }
}

// Handle login
async function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe') === 'on';
    
    try {
        const response = await fetch('http://localhost:3001/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                rememberMe
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Store token
            authToken = data.token;
            localStorage.setItem('daio_auth_token', authToken);
            
            // Store user data
            currentUser = data.user;
            localStorage.setItem('daio_user', JSON.stringify(currentUser));
            
            // Update UI
            updateAuthUI();
            
            // Show success message and redirect to daio.mvp
            showAuthMessage('Login successful! Redirecting to DAIO...', 'success', 'loginForm');
            setTimeout(() => {
                hideLoginModal();
                redirectToDaioMVP();
            }, 2000);
            
        } else {
            showAuthMessage(data.error || 'Login failed', 'error', 'loginForm');
        }
    } catch (error) {
        console.error('Login error:', error);
        showAuthMessage('Network error. Please try again.', 'error', 'loginForm');
    }
}

// Handle signup
async function handleSignup(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const agreeTerms = formData.get('agreeTerms') === 'on';
    
    // Client-side validation
    if (password !== confirmPassword) {
        showAuthMessage('Passwords do not match', 'error', 'signupForm');
        return;
    }
    
    if (!agreeTerms) {
        showAuthMessage('Please agree to the terms and conditions', 'error', 'signupForm');
        return;
    }
    
    try {
        const response = await fetch('http://localhost:3001/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                confirmPassword
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Store token
            authToken = data.token;
            localStorage.setItem('daio_auth_token', authToken);
            
            // Store user data
            currentUser = data.user;
            localStorage.setItem('daio_user', JSON.stringify(currentUser));
            
            // Update UI
            updateAuthUI();
            
            // Show success message and redirect to daio.mvp
            showAuthMessage('Account created successfully! Redirecting to DAIO...', 'success', 'signupForm');
            setTimeout(() => {
                hideSignupModal();
                redirectToDaioMVP();
            }, 2000);
            
        } else {
            showAuthMessage(data.error || 'Signup failed', 'error', 'signupForm');
        }
    } catch (error) {
        console.error('Signup error:', error);
        showAuthMessage('Network error. Please try again.', 'error', 'signupForm');
    }
}

// Check authentication status
async function checkAuthStatus() {
    if (!authToken) return;
    
    try {
        const response = await fetch('http://localhost:3001/api/auth/profile', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            currentUser = data.user;
            localStorage.setItem('daio_user', JSON.stringify(currentUser));
            updateAuthUI();
        } else {
            // Token is invalid, clear it
            logout();
        }
    } catch (error) {
        console.error('Auth check error:', error);
        logout();
    }
}

// Update authentication UI
function updateAuthUI() {
    const navAuth = document.querySelector('.nav-auth');
    const userProfile = document.querySelector('.user-profile');
    
    if (currentUser && navAuth) {
        // Hide auth buttons, show user profile
        navAuth.style.display = 'none';
        
        // Create user profile if it doesn't exist
        if (!userProfile) {
            const userProfileHTML = `
                <div class="user-profile active">
                    <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                    <div class="user-menu">
                        <button class="user-menu-btn" id="userMenuBtn">
                            ${currentUser.name}
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="user-dropdown" id="userDropdown">
                            <a href="#" class="user-dropdown-item" id="profileLink">Profile</a>
                            <a href="#" class="user-dropdown-item" id="settingsLink">Settings</a>
                            <a href="#" class="user-dropdown-item logout" id="logoutBtn">Logout</a>
                        </div>
                    </div>
                </div>
            `;
            navAuth.parentNode.insertBefore(
                document.createRange().createContextualFragment(userProfileHTML),
                navAuth.nextSibling
            );
            
            // Add event listeners for user menu
            const userMenuBtn = document.getElementById('userMenuBtn');
            const logoutBtn = document.getElementById('logoutBtn');
            const profileLink = document.getElementById('profileLink');
            const settingsLink = document.getElementById('settingsLink');
            
            if (userMenuBtn) userMenuBtn.addEventListener('click', toggleUserMenu);
            if (logoutBtn) logoutBtn.addEventListener('click', logout);
            if (profileLink) profileLink.addEventListener('click', showProfile);
            if (settingsLink) settingsLink.addEventListener('click', showSettings);
        }
    } else if (navAuth) {
        // Show auth buttons, hide user profile
        navAuth.style.display = 'flex';
        if (userProfile) {
            userProfile.remove();
        }
    }
}

// Toggle user menu
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Logout
function logout() {
    // Clear stored data
    localStorage.removeItem('daio_auth_token');
    localStorage.removeItem('daio_user');
    
    // Clear variables
    authToken = null;
    currentUser = null;
    
    // Update UI
    updateAuthUI();
    
    // Close any open modals
    hideLoginModal();
    hideSignupModal();
}

// Show profile (placeholder)
function showProfile() {
    alert('Profile page coming soon!');
}

// Show settings (placeholder)
function showSettings() {
    alert('Settings page coming soon!');
}

// Export functions for global access
window.initAuth = initAuth;
window.showLoginModal = showLoginModal;
window.showSignupModal = showSignupModal;
window.logout = logout;

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAuth();
});
