// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Chart.js Charts
document.addEventListener('DOMContentLoaded', function() {
    // Hero Chart
    const heroCtx = document.getElementById('heroChart');
    if (heroCtx) {
        const heroChart = new Chart(heroCtx, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: [{
                    label: 'Impact Growth',
                    data: [100, 250, 500, 1000, 2000, 4000],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        hoverRadius: 8
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    // Portfolio Chart
    const portfolioCtx = document.getElementById('portfolioChart');
    if (portfolioCtx) {
        const portfolioChart = new Chart(portfolioCtx, {
            type: 'line',
            data: {
                labels: ['Jan 2020', 'Jun 2020', 'Jan 2021', 'Jun 2021', 'Jan 2022', 'Jun 2022', 'Jan 2023', 'Mar 2023'],
                datasets: [{
                    label: 'Portfolio Value',
                    data: [100000, 95000, 110000, 105000, 120000, 100000, 95000, 90919],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#94a3b8',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#94a3b8',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        });
    }

    // ESG Performance Chart
    const esgPerformanceCtx = document.getElementById('esgPerformanceChart');
    if (esgPerformanceCtx) {
        const esgPerformanceChart = new Chart(esgPerformanceCtx, {
            type: 'line',
            data: {
                labels: ['Jan 2019', 'Jun 2019', 'Jan 2020', 'Jun 2020', 'Jan 2021', 'Jun 2021', 'Jan 2022', 'Jun 2022', 'Jan 2023', 'Jun 2023', 'Jan 2024', 'Apr 2024'],
                datasets: [{
                    label: 'S&P 500',
                    data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }, {
                    label: 'S&P 500 ESG Index',
                    data: [100, 112, 122, 133, 144, 156, 168, 180, 192, 204, 216, 228],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#374151',
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#64748b',
                            maxTicksLimit: 6
                        },
                        grid: {
                            color: 'rgba(100, 116, 139, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#64748b'
                        },
                        grid: {
                            color: 'rgba(100, 116, 139, 0.1)'
                        }
                    }
                }
            }
        });
    }

    // ESG Growth Chart
    const esgGrowthCtx = document.getElementById('esgGrowthChart');
    if (esgGrowthCtx) {
        const esgGrowthChart = new Chart(esgGrowthCtx, {
            type: 'bar',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
                datasets: [{
                    label: 'ESG Integration',
                    data: [8.5, 9.2, 10.1, 11.2, 12.5, 13.9, 15.4, 17.1, 18.9, 20.9, 23.1],
                    backgroundColor: '#3b82f6'
                }, {
                    label: 'Impact Investing',
                    data: [3.2, 3.8, 4.5, 5.3, 6.2, 7.2, 8.3, 9.5, 10.8, 12.2, 13.8],
                    backgroundColor: '#8b5cf6'
                }, {
                    label: 'Sustainable Funds',
                    data: [4.8, 5.6, 6.5, 7.5, 8.6, 9.8, 11.1, 12.5, 14.0, 15.7, 17.5],
                    backgroundColor: '#1e40af'
                }, {
                    label: 'Green Bonds',
                    data: [3.1, 3.7, 4.4, 5.2, 6.1, 7.1, 8.2, 9.4, 10.7, 12.1, 13.7],
                    backgroundColor: '#10b981'
                }, {
                    label: 'Others',
                    data: [2.9, 3.3, 3.8, 4.4, 5.1, 5.9, 6.8, 7.8, 8.9, 10.1, 11.4],
                    backgroundColor: '#ec4899'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#374151',
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#64748b'
                        },
                        grid: {
                            color: 'rgba(100, 116, 139, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#64748b',
                            callback: function(value) {
                                return '$' + value + 'T';
                            }
                        },
                        grid: {
                            color: 'rgba(100, 116, 139, 0.1)'
                        }
                    }
                }
            }
        });
    }

    // ARR Chart
    const arrCtx = document.getElementById('arrChart');
    if (arrCtx) {
        const arrChart = new Chart(arrCtx, {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 3', 'Year 5', 'Year 10'],
                datasets: [{
                    label: 'Standard management fee of .1% (billed monthly)',
                    data: [0.5, 2.1, 5.2, 12.5],
                    borderColor: '#0f766e',
                    backgroundColor: 'rgba(15, 118, 110, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                }, {
                    label: 'Premium monthly subscription $4.99 (15% of users opt for premium services)',
                    data: [0.8, 3.2, 7.8, 25.0],
                    borderColor: '#0891b2',
                    backgroundColor: 'rgba(8, 145, 178, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                }, {
                    label: 'Total Revenue',
                    data: [1.3, 5.3, 13.0, 37.5],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 4,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#374151',
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#64748b'
                        },
                        grid: {
                            color: 'rgba(100, 116, 139, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#64748b',
                            callback: function(value) {
                                return '$' + value + 'M';
                            }
                        },
                        grid: {
                            color: 'rgba(100, 116, 139, 0.1)'
                        }
                    }
                }
            }
        });
    }
});

// Interactive Journey Steps
document.addEventListener('DOMContentLoaded', function() {
    const journeySteps = document.querySelectorAll('.journey-step');
    
    journeySteps.forEach(step => {
        step.addEventListener('click', function() {
            // Remove active class from all steps
            journeySteps.forEach(s => s.classList.remove('active'));
            // Add active class to clicked step
            this.classList.add('active');
            
            // Add some visual feedback
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
            }, 200);
        });
    });
});

// Interactive Regulation Points
document.addEventListener('DOMContentLoaded', function() {
    const regulationPoints = document.querySelectorAll('.regulation-point');
    
    regulationPoints.forEach(point => {
        point.addEventListener('click', function() {
            // Toggle active state
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                this.style.background = '#f59e0b';
                this.style.transform = 'scale(1.5)';
            } else {
                this.style.background = '#fbbf24';
                this.style.transform = 'scale(1)';
            }
        });
    });
});





// Form handling for contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show success message
        showNotification('Message sent successfully! We\'ll respond within 24 hours.', 'success');
        
        // Reset form
        this.reset();
        
        // In a real application, you would send this data to your backend
        console.log('Contact form submitted:', data);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.layer, .pillar, .opportunity-card, .tier, .summary-card, .gtm-content, .moonshot-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for forms
function addLoadingState(form, button) {
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Enhanced form submission with loading states
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        addLoadingState(this, submitBtn);
        
        // Simulate form processing
        setTimeout(() => {
            showNotification('Message sent successfully! We\'ll respond within 24 hours.', 'success');
            this.reset();
        }, 2000);
    });
}

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.layer, .pillar, .opportunity-card, .tier');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add some interactive statistics
function updateStats() {
    const stats = [
        { label: 'Target Market', value: '21M+ users' },
        { label: 'ESG Growth', value: '18.8% CAGR' },
        { label: 'Team Size', value: '3 Founders' },
        { label: 'Launch', value: 'Q1 2025' }
    ];
    
    // You can add this to your HTML and update dynamically
    console.log('Company Statistics:', stats);
}

// Initialize stats when page loads
document.addEventListener('DOMContentLoaded', updateStats);

// Add smooth reveal animations for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        if (scrollY + windowHeight > sectionTop + sectionHeight * 0.3) {
            section.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add CSS for reveal animations
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    section:first-child,
    section#solution {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

// Initialize reveal on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        revealOnScroll();
    }, 100);
});

// Add interactive timeline functionality
document.addEventListener('DOMContentLoaded', function() {
    const timelineMarker = document.querySelector('.timeline-marker');
    const quarters = document.querySelectorAll('.quarter');
    
    if (timelineMarker && quarters.length > 0) {
        // Add click functionality to quarters
        quarters.forEach((quarter, index) => {
            quarter.addEventListener('click', function() {
                // Update marker position
                const quarterWidth = this.offsetWidth;
                const quarterLeft = this.offsetLeft;
                const containerWidth = this.parentElement.offsetWidth;
                
                timelineMarker.style.left = `${(quarterLeft + quarterWidth / 2) / containerWidth * 100}%`;
                
                // Add visual feedback
                quarters.forEach(q => q.classList.remove('active'));
                this.classList.add('active');
                
                // Show quarter details (you can expand this)
                showQuarterDetails(index + 1);
            });
        });
    }
});

function showQuarterDetails(quarterNumber) {
    const tooltip = document.createElement('div');
    tooltip.className = 'quarter-tooltip';
    tooltip.innerHTML = `
        <h4>Q${quarterNumber} 2025</h4>
        <p>Click on roadmap items below for more details about this quarter.</p>
    `;
    
    tooltip.style.cssText = `
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        max-width: 300px;
        text-align: center;
        border: 1px solid #e2e8f0;
    `;
    
    document.body.appendChild(tooltip);
    
    // Remove tooltip after 3 seconds
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.remove();
        }
    }, 3000);
}

// Add CSS for quarter interactions
const quarterStyle = document.createElement('style');
quarterStyle.textContent = `
    .quarter {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .quarter:hover {
        background: #cbd5e1;
        transform: scale(1.05);
    }
    
    .quarter.active {
        background: #10b981;
        color: white;
    }
    
    .quarter-tooltip {
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
`;
document.head.appendChild(quarterStyle);

// Bird Mascot Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    const birdMascot = document.querySelector('.bird-mascot');
    
    if (birdMascot) {
        // Add click interaction
        birdMascot.addEventListener('click', function() {
            // Add a special animation on click
            this.style.animation = 'birdClick 0.5s ease-in-out';
            
            // Reset animation after it completes
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
            
            // Add a subtle bounce effect
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        // Add hover sound effect simulation (visual feedback)
        birdMascot.addEventListener('mouseenter', function() {
            // Add a subtle glow effect
            this.style.filter = 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))';
        });
        
        birdMascot.addEventListener('mouseleave', function() {
            // Remove glow effect
            this.style.filter = '';
        });
        
        // Add keyboard accessibility
        birdMascot.setAttribute('tabindex', '0');
        birdMascot.setAttribute('role', 'button');
        birdMascot.setAttribute('aria-label', 'DAIO Bird Mascot - Click for interaction');
        
        birdMascot.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
});

// Add CSS animation for bird click
const birdClickStyle = document.createElement('style');
birdClickStyle.textContent = `
    @keyframes birdClick {
        0% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.2) rotate(-5deg); }
        50% { transform: scale(1.1) rotate(5deg); }
        75% { transform: scale(1.15) rotate(-2deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
`;
document.head.appendChild(birdClickStyle);

// Chatbot Functionality
class DAIOAssistant {
    constructor() {
        this.isOpen = false;
        this.isFirstVisit = true;
        this.messageHistory = [];
        this.currentUser = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadUserPreferences();
        this.setupQuickReplies();
    }

    bindEvents() {
        // Bird mascot click
        const birdMascot = document.querySelector('.bird-mascot');
        if (birdMascot) {
            birdMascot.addEventListener('click', () => {
                this.openChatbot();
            });
        }

        // First click anywhere on website
        document.addEventListener('click', (e) => {
            if (this.isFirstVisit && !e.target.closest('.chatbot') && !e.target.closest('.chatbot-trigger')) {
                this.openChatbot();
                this.isFirstVisit = false;
            }
        });

        // Chatbot trigger button
        const chatbotTrigger = document.getElementById('chatbotTrigger');
        if (chatbotTrigger) {
            chatbotTrigger.addEventListener('click', () => {
                this.openChatbot();
            });
        }

        // Close button
        const closeBtn = document.getElementById('chatbotClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeChatbot();
            });
        }

        // Send button
        const sendBtn = document.getElementById('chatbotSend');
        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                this.sendMessage();
            });
        }

        // Input field
        const inputField = document.getElementById('chatbotInput');
        if (inputField) {
            inputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });

            inputField.addEventListener('input', () => {
                this.toggleSendButton();
            });
        }

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeChatbot();
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('.chatbot') && !e.target.closest('.chatbot-trigger')) {
                this.closeChatbot();
            }
        });
    }

    openChatbot() {
        const chatbot = document.getElementById('chatbot');
        const trigger = document.getElementById('chatbotTrigger');
        
        if (chatbot && !this.isOpen) {
            chatbot.classList.add('active');
            this.isOpen = true;
            
            if (trigger) {
                trigger.classList.add('hidden');
            }
            
            // Focus on input field
            const input = document.getElementById('chatbotInput');
            if (input) {
                setTimeout(() => input.focus(), 300);
            }
            
            // Scroll to bottom of messages
            this.scrollToBottom();
            
            // Track opening
            this.trackEvent('chatbot_opened');
        }
    }

    closeChatbot() {
        const chatbot = document.getElementById('chatbot');
        const trigger = document.getElementById('chatbotTrigger');
        
        if (chatbot && this.isOpen) {
            chatbot.classList.remove('active');
            this.isOpen = false;
            
            if (trigger) {
                trigger.classList.remove('hidden');
            }
            
            // Track closing
            this.trackEvent('chatbot_closed');
        }
    }

    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input?.value.trim();
        
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        
        // Clear input
        if (input) {
            input.value = '';
            this.toggleSendButton();
        }
        
        // Process message and generate response
        this.processMessage(message);
        
        // Track message sent
        this.trackEvent('message_sent', { message: message });
    }

    addMessage(content, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        
        if (sender === 'bot') {
            avatar.innerHTML = '<i class="fas fa-robot"></i>';
        } else {
            avatar.innerHTML = '<i class="fas fa-user"></i>';
        }
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `<p>${this.escapeHtml(content)}</p>`;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        
        messagesContainer.appendChild(messageDiv);
        
        // Store in history
        this.messageHistory.push({
            sender: sender,
            content: content,
            timestamp: new Date().toISOString()
        });
        
        // Scroll to bottom
        this.scrollToBottom();
    }

    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Simulate typing delay
        setTimeout(() => {
            let response = this.generateResponse(lowerMessage);
            this.addMessage(response, 'bot');
        }, 500 + Math.random() * 1000);
    }

    generateResponse(message) {
        // ESG Investing
        if (message.includes('esg') || message.includes('environmental') || message.includes('sustainable')) {
            return "ESG investing focuses on Environmental, Social, and Governance factors. DAIO integrates ESG data into every investment decision, helping you align your portfolio with your values while potentially improving returns. Our platform provides real-time ESG scoring and impact tracking.";
        }
        
        // How DAIO works
        if (message.includes('how') && message.includes('work') || message.includes('process')) {
            return "DAIO works through three main pillars: Access (guided investing platform), Impact (ESG integration), and Participate (DAO governance). We start with a risk assessment, recommend a personalized portfolio, and provide ongoing monitoring with ESG impact tracking.";
        }
        
        // Investment minimums
        if (message.includes('minimum') || message.includes('cost') || message.includes('fee')) {
            return "DAIO offers a $50 minimum investment to make sustainable investing accessible to everyone. Our fees are 5x cheaper than traditional ETFs, and we provide financial advisor-level guidance through our robo-advisor technology.";
        }
        
        // Contact support
        if (message.includes('contact') || message.includes('support') || message.includes('help')) {
            return "You can reach our support team through the contact form on this website, or email us directly at hello@daio.com. We typically respond within 24 hours and are happy to help with any questions about sustainable investing.";
        }
        
        // Portfolio questions
        if (message.includes('portfolio') || message.includes('investment') || message.includes('asset')) {
            return "DAIO offers a diverse range of investment options including stocks, bonds, crypto, and commodities. All investments are ESG-screened and can be customized based on your risk tolerance and impact preferences.";
        }
        
        // Risk assessment
        if (message.includes('risk') || message.includes('volatile') || message.includes('safe')) {
            return "All investments carry some risk, but DAIO helps manage this through diversification and ESG screening. We assess your risk tolerance through our proprietary survey and recommend portfolios that balance growth potential with your comfort level.";
        }
        
        // Default response
        const defaultResponses = [
            "That's a great question! Let me help you understand how DAIO can support your sustainable investment goals.",
            "I'd be happy to help with that. Could you tell me more about what you're looking to learn about DAIO?",
            "Thanks for asking! DAIO is designed to make sustainable investing simple and accessible. What specific aspect would you like to explore?",
            "I'm here to help you understand DAIO's approach to responsible investing. What would you like to know more about?"
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    setupQuickReplies() {
        const quickReplies = document.querySelectorAll('.quick-reply');
        quickReplies.forEach(reply => {
            reply.addEventListener('click', () => {
                const message = reply.getAttribute('data-message');
                if (message) {
                    this.addMessage(message, 'user');
                    this.processMessage(message);
                }
            });
        });
    }

    toggleSendButton() {
        const input = document.getElementById('chatbotInput');
        const sendBtn = document.getElementById('chatbotSend');
        
        if (input && sendBtn) {
            const hasText = input.value.trim().length > 0;
            sendBtn.disabled = !hasText;
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    loadUserPreferences() {
        // Load from localStorage if available
        const saved = localStorage.getItem('daio_chatbot_prefs');
        if (saved) {
            try {
                const prefs = JSON.parse(saved);
                this.isFirstVisit = prefs.isFirstVisit !== false;
                this.messageHistory = prefs.messageHistory || [];
            } catch (e) {
                console.warn('Failed to load chatbot preferences');
            }
        }
    }

    saveUserPreferences() {
        // Save to localStorage
        const prefs = {
            isFirstVisit: this.isFirstVisit,
            messageHistory: this.messageHistory.slice(-50) // Keep last 50 messages
        };
        
        try {
            localStorage.setItem('daio_chatbot_prefs', JSON.stringify(prefs));
        } catch (e) {
            console.warn('Failed to save chatbot preferences');
        }
    }

    trackEvent(eventName, data = {}) {
        // Analytics tracking (can be integrated with Google Analytics, etc.)
        console.log(`Chatbot Event: ${eventName}`, data);
        
        // Save preferences after events
        this.saveUserPreferences();
    }

    // Public methods for external use
    open() {
        this.openChatbot();
    }

    close() {
        this.closeChatbot();
    }

    isOpen() {
        return this.isOpen;
    }
}

// Initialize chatbot when DOM is loaded
let daioAssistant;

// Main initialization function that waits for content to load
function initializeAfterContent() {
    // Wait for content manager to load before initializing other features
    const checkContentLoaded = () => {
        if (window.contentManager && window.contentManager.loaded) {
            // Initialize all features after content is loaded
            initCharts();
            initInteractiveElements();
            initScrollReveal();
            initTimeline();
            initBirdMascot();
            initNews();
            initAuth();
            initHeroAnimations();
            initLazyLoading();
            daioAssistant = new DAIOAssistant();
            console.log('All features initialized after content load');
        } else {
            setTimeout(checkContentLoaded, 100);
        }
    };
    checkContentLoaded();
}

// Hero Animations
function initHeroAnimations() {
    // Animate floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        const speed = parseFloat(shape.dataset.speed) || 0.5;
        let y = 0;
        
        function animateShape() {
            y += speed;
            const x = Math.sin(y * 0.01) * 20;
            shape.style.transform = `translate(${x}px, ${y}px) rotate(${y * 0.5}deg)`;
            requestAnimationFrame(animateShape);
        }
        animateShape();
    });

    // Animate particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const speed = parseFloat(particle.dataset.speed) || 0.3;
        let y = Math.random() * window.innerHeight;
        
        function animateParticle() {
            y -= speed;
            if (y < -10) y = window.innerHeight + 10;
            particle.style.transform = `translateY(${y}px)`;
            requestAnimationFrame(animateParticle);
        }
        animateParticle();
    });

    // Animate stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.dataset.target);
                animateNumber(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    });

    statNumbers.forEach(stat => observer.observe(stat));

    // Button ripple effect
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = this.querySelector('.btn-ripple');
            if (ripple) {
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.animation = 'none';
                ripple.offsetHeight; // Trigger reflow
                ripple.style.animation = 'ripple 0.6s linear';
            }
        });
    });
}

// Animate number counting
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (difference * progress));
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Lazy Loading Implementation
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGYwZjAiLz48L3N2Zz4=';
                img.classList.add('lazy');
                imageObserver.observe(img);
            }
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAfterContent();
});

// Global functions for external access
function openChatbot() {
    if (daioAssistant) {
        daioAssistant.open();
    }
}

function closeChatbot() {
    if (daioAssistant) {
        daioAssistant.close();
    }
}

// News Functionality
function initNews() {
    // Initialize news filtering
    initNewsFilters();
    
    // Initialize news modal
    initNewsModal();
    
    // Initialize news pagination
    initNewsPagination();
}

function initNewsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter news cards
            newsCards.forEach(card => {
                const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
                const shouldShow = filter === 'all' || tags.includes(filter.toLowerCase());
                
                if (shouldShow) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initNewsModal() {
    // Create modal HTML
    const modalHTML = `
        <div class="news-modal" id="newsModal">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="modal-close" id="modalClose">&times;</button>
                    <div class="modal-meta">
                        <span class="source"></span>
                        <span class="date"></span>
                        <span class="read-time"></span>
                    </div>
                    <h2 class="modal-title"></h2>
                    <div class="modal-tags"></div>
                </div>
                <div class="modal-body">
                    <p class="modal-content-text"></p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add click handlers for read more buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more')) {
            const card = e.target.closest('.news-card');
            const articleId = card.dataset.articleId;
            openNewsModal(articleId);
        }
    });
    
    // Close modal handlers
    document.getElementById('modalClose').addEventListener('click', closeNewsModal);
    document.getElementById('newsModal').addEventListener('click', (e) => {
        if (e.target.id === 'newsModal') {
            closeNewsModal();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNewsModal();
        }
    });
}

async function openNewsModal(articleId) {
    try {
        let articles = [];
        
        // Try to get articles from news service first
        if (window.newsService) {
            const news = await window.newsService.getNews();
            articles = news.articles;
        } else if (window.contentManager && window.contentManager.content.news) {
            // Fallback to content manager
            articles = window.contentManager.content.news.articles;
        }
        
        if (!articles.length) return;
        
        const article = articles.find(a => a.id == articleId);
        if (!article) return;
        
        const modal = document.getElementById('newsModal');
        const source = modal.querySelector('.source');
        const date = modal.querySelector('.date');
        const readTime = modal.querySelector('.read-time');
        const title = modal.querySelector('.modal-title');
        const tags = modal.querySelector('.modal-tags');
        const content = modal.querySelector('.modal-content-text');
        
        source.textContent = article.source;
        date.textContent = new Date(article.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        readTime.textContent = article.readTime;
        title.textContent = article.title;
        tags.innerHTML = article.tags.map(tag => 
            `<span class="tag ${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`
        ).join('');
        content.textContent = article.content;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error opening news modal:', error);
    }
}

function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function initNewsPagination() {
    const pageNumbers = document.querySelectorAll('.page-number');
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    
    pageNumbers.forEach(number => {
        number.addEventListener('click', () => {
            pageNumbers.forEach(n => n.classList.remove('active'));
            number.classList.add('active');
            
            // Update pagination buttons
            const currentPage = parseInt(number.textContent);
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === pageNumbers.length;
        });
    });
    
    prevBtn.addEventListener('click', () => {
        const activePage = document.querySelector('.page-number.active');
        const currentPage = parseInt(activePage.textContent);
        if (currentPage > 1) {
            pageNumbers[currentPage - 2].click();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const activePage = document.querySelector('.page-number.active');
        const currentPage = parseInt(activePage.textContent);
        if (currentPage < pageNumbers.length) {
            pageNumbers[currentPage].click();
        }
    });
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
