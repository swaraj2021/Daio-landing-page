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
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Portfolio Growth',
                    data: [100, 105, 110, 108, 115, 120],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
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
                        display: false
                    },
                    y: {
                        display: false
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

// Interactive Company Positioning
document.addEventListener('DOMContentLoaded', function() {
    const companies = document.querySelectorAll('.company');
    
    companies.forEach(company => {
        company.addEventListener('click', function() {
            // Remove active class from all companies
            companies.forEach(c => c.classList.remove('active'));
            // Add active class to clicked company
            this.classList.add('active');
            
            // Show company details (you can expand this)
            const companyName = this.querySelector('span').textContent;
            showCompanyDetails(companyName);
        });
    });
});

function showCompanyDetails(companyName) {
    // Create a simple tooltip or modal
    const tooltip = document.createElement('div');
    tooltip.className = 'company-tooltip';
    tooltip.innerHTML = `
        <h4>${companyName}</h4>
        <p>Click to learn more about ${companyName}'s positioning in the market.</p>
    `;
    
    tooltip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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

// Interactive Roadmap
document.addEventListener('DOMContentLoaded', function() {
    const roadmapItems = document.querySelectorAll('.stage-item, .funds-item, .resource-item');
    
    roadmapItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle active state
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            } else {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }
        });
    });
});

// Interactive Team Size
document.addEventListener('DOMContentLoaded', function() {
    const sizeItems = document.querySelectorAll('.size-item');
    
    sizeItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            sizeItems.forEach(s => s.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // Add visual feedback
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
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
    const animatedElements = document.querySelectorAll('.layer, .pillar, .opportunity-card, .tier, .summary-card, .roadmap-container, .gtm-content, .moonshot-content');
    
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
    
    section:first-child {
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
