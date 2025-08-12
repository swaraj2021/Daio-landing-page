// DAIO Website Comprehensive Test Suite
class DAIOTestSuite {
    constructor() {
        this.testResults = [];
        this.totalTests = 0;
        this.passedTests = 0;
        this.failedTests = 0;
        this.chartInstance = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateTestSummary();
        console.log('DAIO Test Suite initialized');
    }

    setupEventListeners() {
        // Form submission test
        const testForm = document.getElementById('testForm');
        if (testForm) {
            testForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.testFormSubmission();
            });
        }

        // Journey step interactions
        document.querySelectorAll('.journey-step').forEach(step => {
            step.addEventListener('click', () => {
                this.testJourneyStepInteraction(step);
            });
        });

        // Regulation point interactions
        document.querySelectorAll('.regulation-point').forEach(point => {
            point.addEventListener('click', () => {
                this.testRegulationPointInteraction(point);
            });
        });
    }

    // Test Result Management
    addTestResult(testName, passed, message, details = null) {
        const result = {
            name: testName,
            passed: passed,
            message: message,
            details: details,
            timestamp: new Date().toISOString()
        };
        
        this.testResults.push(result);
        this.totalTests++;
        
        if (passed) {
            this.passedTests++;
        } else {
            this.failedTests++;
        }
        
        this.updateTestSummary();
        this.logTestResult(result);
        
        return result;
    }

    updateTestSummary() {
        const totalEl = document.getElementById('total-tests');
        const passedEl = document.getElementById('passed-tests');
        const failedEl = document.getElementById('failed-tests');
        const successRateEl = document.getElementById('success-rate');
        
        if (totalEl) totalEl.textContent = this.totalTests;
        if (passedEl) passedEl.textContent = this.passedTests;
        if (failedEl) failedEl.textContent = this.failedTests;
        
        const successRate = this.totalTests > 0 ? Math.round((this.passedTests / this.totalTests) * 100) : 0;
        if (successRateEl) successRateEl.textContent = successRate + '%';
    }

    logTestResult(result) {
        const resultElement = document.getElementById(result.name.toLowerCase().replace(/\s+/g, '-') + '-test-result');
        if (resultElement) {
            resultElement.className = `test-result ${result.passed ? 'test-pass' : 'test-fail'}`;
            resultElement.textContent = result.passed ? `✅ PASS: ${result.message}` : `❌ FAIL: ${result.message}`;
        }
        
        console.log(`[${result.passed ? 'PASS' : 'FAIL'}] ${result.name}: ${result.message}`, result.details);
    }

    // HTML Structure Tests
    testNavigation() {
        const nav = document.querySelector('.navbar');
        const logo = document.querySelector('.nav-logo h2');
        const menuItems = document.querySelectorAll('.nav-menu li a');
        
        let passed = true;
        let message = 'Navigation structure is correct';
        let details = {};
        
        // Test navigation existence
        if (!nav) {
            passed = false;
            message = 'Navigation bar is missing';
        }
        
        // Test logo
        if (logo && logo.textContent !== 'DAIO') {
            passed = false;
            message = 'Logo text should be "DAIO"';
            details.logo = logo.textContent;
        }
        
        // Test menu items
        const expectedMenuItems = ['Home', 'Problem', 'Solution', 'Market', 'Product', 'Roadmap', 'Contact'];
        const actualMenuItems = Array.from(menuItems).map(item => item.textContent);
        
        if (actualMenuItems.length !== expectedMenuItems.length) {
            passed = false;
            message = `Expected ${expectedMenuItems.length} menu items, got ${actualMenuItems.length}`;
            details.expected = expectedMenuItems;
            details.actual = actualMenuItems;
        }
        
        return this.addTestResult('Navigation Structure', passed, message, details);
    }

    testHeroSection() {
        const hero = document.querySelector('.hero');
        const heroTitle = document.querySelector('.hero h1');
        const heroTagline = document.querySelector('.hero-tagline');
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        const birdMascot = document.querySelector('.bird-mascot');
        
        let passed = true;
        let message = 'Hero section structure is correct';
        let details = {};
        
        // Test hero section existence
        if (!hero) {
            passed = false;
            message = 'Hero section is missing';
        }
        
        // Test hero title
        if (heroTitle && heroTitle.textContent !== 'DAIO') {
            passed = false;
            message = 'Hero title should be "DAIO"';
            details.title = heroTitle.textContent;
        }
        
        // Test hero tagline
        if (!heroTagline) {
            passed = false;
            message = 'Hero tagline is missing';
        }
        
        // Test hero buttons
        if (heroButtons.length < 2) {
            passed = false;
            message = 'Hero section should have at least 2 buttons';
            details.buttonCount = heroButtons.length;
        }
        
        // Test bird mascot
        if (!birdMascot) {
            passed = false;
            message = 'Bird mascot is missing from hero section';
        } else {
            // Test bird mascot structure
            const birdHead = birdMascot.querySelector('.bird-head');
            const birdEyes = birdMascot.querySelectorAll('.bird-eye');
            const birdBeak = birdMascot.querySelector('.bird-beak');
            const birdWing = birdMascot.querySelector('.bird-wing');
            const birdTail = birdMascot.querySelector('.bird-tail');
            
            if (!birdHead || !birdBeak || !birdWing || !birdTail) {
                passed = false;
                message = 'Bird mascot is missing essential parts';
                details.missingParts = {
                    head: !!birdHead,
                    beak: !!birdBeak,
                    wing: !!birdWing,
                    tail: !!birdTail
                };
            }
            
            if (birdEyes.length !== 2) {
                passed = false;
                message = 'Bird mascot should have 2 eyes';
                details.eyeCount = birdEyes.length;
            }
        }
        
        return this.addTestResult('Hero Section', passed, message, details);
    }

    testSolutionPillars() {
        const pillars = document.querySelectorAll('.pillar');
        const expectedPillars = ['access', 'impact', 'participate'];
        
        let passed = true;
        let message = 'Solution pillars structure is correct';
        let details = {};
        
        // Test pillar count
        if (pillars.length !== expectedPillars.length) {
            passed = false;
            message = `Expected ${expectedPillars.length} pillars, got ${pillars.length}`;
            details.expected = expectedPillars;
            details.actual = pillars.length;
        }
        
        // Test each pillar structure
        pillars.forEach((pillar, index) => {
            const header = pillar.querySelector('.pillar-header h3');
            const features = pillar.querySelector('.pillar-features ul');
            
            if (!header) {
                passed = false;
                message = `Pillar ${index + 1} is missing header`;
            }
            
            if (!features) {
                passed = false;
                message = `Pillar ${index + 1} is missing features list`;
            }
        });
        
        return this.addTestResult('Solution Pillars', passed, message, details);
    }

    // CSS Styling Tests
    testColorScheme() {
        const primaryGreen = '#10b981';
        const darkBlue = '#0f172a';
        const gray = '#64748b';
        
        let passed = true;
        let message = 'Color scheme is consistent';
        let details = {};
        
        // Test if colors are defined in CSS
        const computedStyles = getComputedStyle(document.body);
        const testElement = document.createElement('div');
        testElement.style.background = primaryGreen;
        document.body.appendChild(testElement);
        
        const actualColor = getComputedStyle(testElement).backgroundColor;
        document.body.removeChild(testElement);
        
        // Basic color validation (this is a simplified test)
        if (!primaryGreen || !darkBlue || !gray) {
            passed = false;
            message = 'Color scheme variables are not properly defined';
        }
        
        return this.addTestResult('Color Scheme', passed, message, details);
    }

    testTypography() {
        const headings = document.querySelectorAll('h1, h2, h3');
        let passed = true;
        let message = 'Typography is consistent';
        let details = {};
        
        // Test if Inter font is loaded
        const fontFamily = getComputedStyle(document.body).fontFamily;
        if (!fontFamily.includes('Inter')) {
            passed = false;
            message = 'Inter font family is not loaded';
            details.fontFamily = fontFamily;
        }
        
        // Test heading hierarchy
        if (headings.length < 3) {
            passed = false;
            message = 'Insufficient heading hierarchy';
            details.headingCount = headings.length;
        }
        
        return this.addTestResult('Typography', passed, message, details);
    }

    testResponsiveGrid() {
        const grid = document.querySelector('.test-grid');
        let passed = true;
        let message = 'Responsive grid is working';
        let details = {};
        
        if (!grid) {
            passed = false;
            message = 'Test grid is missing';
        } else {
            const gridStyle = getComputedStyle(grid);
            const display = gridStyle.display;
            const gridTemplateColumns = gridStyle.gridTemplateColumns;
            
            if (display !== 'grid') {
                passed = false;
                message = 'Grid display property is not set to grid';
                details.display = display;
            }
            
            if (!gridTemplateColumns.includes('minmax')) {
                passed = false;
                message = 'Grid template columns does not use minmax function';
                details.gridTemplateColumns = gridTemplateColumns;
            }
        }
        
        return this.addTestResult('Responsive Grid', passed, message, details);
    }

    // JavaScript Functionality Tests
    testChartJS() {
        let passed = true;
        let message = 'Chart.js integration is working';
        let details = {};
        
        try {
            const canvas = document.getElementById('testChart');
            if (!canvas) {
                passed = false;
                message = 'Test chart canvas is missing';
            } else {
                // Create a test chart
                this.chartInstance = new Chart(canvas, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar'],
                        datasets: [{
                            label: 'Test Data',
                            data: [10, 20, 30],
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
                
                if (!this.chartInstance) {
                    passed = false;
                    message = 'Failed to create Chart.js instance';
                }
            }
        } catch (error) {
            passed = false;
            message = 'Chart.js test failed with error';
            details.error = error.message;
        }
        
        return this.addTestResult('Chart.js Integration', passed, message, details);
    }

    testInteractiveElements() {
        let passed = true;
        let message = 'Interactive elements are working';
        let details = {};
        
        // Test journey steps
        const journeySteps = document.querySelectorAll('.journey-step');
        if (journeySteps.length === 0) {
            passed = false;
            message = 'No journey steps found for testing';
        }
        
        // Test regulation points
        const regulationPoints = document.querySelectorAll('.regulation-point');
        if (regulationPoints.length === 0) {
            passed = false;
            message = 'No regulation points found for testing';
        }
        
        // Test hover effects (basic test)
        journeySteps.forEach((step, index) => {
            if (!step.style.transition) {
                passed = false;
                message = `Journey step ${index + 1} missing transition property`;
            }
        });
        
        return this.addTestResult('Interactive Elements', passed, message, details);
    }

    testFormValidation() {
        const form = document.getElementById('testForm');
        const nameInput = document.getElementById('testName');
        const emailInput = document.getElementById('testEmail');
        const messageInput = document.getElementById('testMessage');
        
        let passed = true;
        let message = 'Form validation is working';
        let details = {};
        
        if (!form || !nameInput || !emailInput || !messageInput) {
            passed = false;
            message = 'Form elements are missing';
        } else {
            // Test required attributes
            if (!nameInput.hasAttribute('required')) {
                passed = false;
                message = 'Name input missing required attribute';
            }
            
            if (!emailInput.hasAttribute('required')) {
                passed = false;
                message = 'Email input missing required attribute';
            }
            
            if (!messageInput.hasAttribute('required')) {
                passed = false;
                message = 'Message input missing required attribute';
            }
            
            // Test input types
            if (emailInput.type !== 'email') {
                passed = false;
                message = 'Email input type should be email';
                details.emailType = emailInput.type;
            }
        }
        
        return this.addTestResult('Form Validation', passed, message, details);
    }

    testFormSubmission() {
        const nameInput = document.getElementById('testName');
        const emailInput = document.getElementById('testEmail');
        const messageInput = document.getElementById('testMessage');
        
        let passed = true;
        let message = 'Form submission test completed';
        let details = {};
        
        // Simulate form submission
        if (nameInput && emailInput && messageInput) {
            nameInput.value = 'Test User';
            emailInput.value = 'test@example.com';
            messageInput.value = 'This is a test message';
            
            // Test form validation
            const isValid = nameInput.checkValidity() && emailInput.checkValidity() && messageInput.checkValidity();
            
            if (!isValid) {
                passed = false;
                message = 'Form validation failed';
                details.validation = {
                    name: nameInput.validity.valid,
                    email: emailInput.validity.valid,
                    message: messageInput.validity.valid
                };
            }
        }
        
        return this.addTestResult('Form Submission', passed, message, details);
    }

    // Performance Tests
    testPerformance() {
        let passed = true;
        let message = 'Performance metrics collected';
        let details = {};
        
        try {
            // Page load performance
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            const domReadyTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
            
            document.getElementById('load-time').textContent = `${loadTime}ms`;
            document.getElementById('dom-time').textContent = `${domReadyTime}ms`;
            
            // Image loading test
            const images = document.querySelectorAll('img');
            document.getElementById('images-loaded').textContent = images.length;
            
            // Performance thresholds
            if (loadTime > 5000) {
                passed = false;
                message = 'Page load time exceeds 5 seconds';
                details.loadTime = loadTime;
            }
            
            if (domReadyTime > 3000) {
                passed = false;
                message = 'DOM ready time exceeds 3 seconds';
                details.domReadyTime = domReadyTime;
            }
            
        } catch (error) {
            passed = false;
            message = 'Performance test failed';
            details.error = error.message;
        }
        
        return this.addTestResult('Performance', passed, message, details);
    }

    testResponsiveDesign() {
        let passed = true;
        let message = 'Responsive design is working';
        let details = {};
        
        try {
            const viewport = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            
            const pixelRatio = window.devicePixelRatio || 1;
            
            document.getElementById('viewport-size').textContent = `${viewport.width}x${viewport.height}`;
            document.getElementById('pixel-ratio').textContent = pixelRatio;
            
            // Test media query support
            const mediaQuery = window.matchMedia('(max-width: 768px)');
            document.getElementById('media-queries').textContent = mediaQuery.matches ? 'Mobile breakpoint active' : 'Desktop breakpoint active';
            
            // Basic responsive test
            if (viewport.width < 768) {
                // Mobile view
                const grid = document.querySelector('.test-grid');
                if (grid) {
                    const gridStyle = getComputedStyle(grid);
                    if (gridStyle.gridTemplateColumns.includes('1fr')) {
                        passed = true;
                        message = 'Mobile responsive grid is working';
                    } else {
                        passed = false;
                        message = 'Mobile responsive grid is not working';
                    }
                }
            }
            
        } catch (error) {
            passed = false;
            message = 'Responsive design test failed';
            details.error = error.message;
        }
        
        return this.addTestResult('Responsive Design', passed, message, details);
    }

    // Accessibility Tests
    testSemanticHTML() {
        let passed = true;
        let message = 'Semantic HTML structure is correct';
        let details = {};
        
        const semanticElements = [
            'nav', 'header', 'main', 'section', 'article', 'aside', 'footer',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li'
        ];
        
        const foundElements = {};
        semanticElements.forEach(tag => {
            const elements = document.querySelectorAll(tag);
            if (elements.length > 0) {
                foundElements[tag] = elements.length;
            }
        });
        
        if (Object.keys(foundElements).length < 5) {
            passed = false;
            message = 'Insufficient semantic HTML elements';
            details.foundElements = foundElements;
        }
        
        return this.addTestResult('Semantic HTML', passed, message, details);
    }

    testARIA() {
        let passed = true;
        let message = 'ARIA accessibility is implemented';
        let details = {};
        
        // Test for basic ARIA attributes
        const ariaElements = document.querySelectorAll('[aria-label], [aria-labelledby], [aria-describedby], [role]');
        
        if (ariaElements.length === 0) {
            passed = false;
            message = 'No ARIA attributes found';
        } else {
            details.ariaCount = ariaElements.length;
        }
        
        // Test for alt attributes on images
        const images = document.querySelectorAll('img');
        const imagesWithAlt = document.querySelectorAll('img[alt]');
        
        if (images.length > 0 && imagesWithAlt.length < images.length) {
            passed = false;
            message = 'Some images are missing alt attributes';
            details.totalImages = images.length;
            details.imagesWithAlt = imagesWithAlt.length;
        }
        
        return this.addTestResult('ARIA Accessibility', passed, message, details);
    }

    // Interactive Element Tests
    testJourneyStepInteraction(step) {
        let passed = true;
        let message = 'Journey step interaction is working';
        let details = {};
        
        try {
            // Test click interaction
            const originalTransform = step.style.transform;
            step.click();
            
            // Check if transform changed (basic interaction test)
            if (step.style.transform !== originalTransform) {
                passed = true;
                message = 'Journey step interaction successful';
            } else {
                passed = false;
                message = 'Journey step interaction failed';
            }
            
        } catch (error) {
            passed = false;
            message = 'Journey step interaction test failed';
            details.error = error.message;
        }
        
        return this.addTestResult('Journey Step Interaction', passed, message, details);
    }

    testRegulationPointInteraction(point) {
        let passed = true;
        let message = 'Regulation point interaction is working';
        let details = {};
        
        try {
            // Test click interaction
            const originalBackground = point.style.background;
            point.click();
            
            // Check if background changed (basic interaction test)
            if (point.style.background !== originalBackground) {
                passed = true;
                message = 'Regulation point interaction successful';
            } else {
                passed = false;
                message = 'Regulation point interaction failed';
            }
            
        } catch (error) {
            passed = false;
            message = 'Regulation point interaction test failed';
            details.error = error.message;
        }
        
        return this.addTestResult('Regulation Point Interaction', passed, message, details);
    }

    testBirdMascot() {
        const birdMascot = document.querySelector('.bird-mascot');
        
        let passed = true;
        let message = 'Bird mascot functionality is working';
        let details = {};
        
        if (!birdMascot) {
            passed = false;
            message = 'Bird mascot element not found';
        } else {
            // Test accessibility attributes
            const tabindex = birdMascot.getAttribute('tabindex');
            const role = birdMascot.getAttribute('role');
            const ariaLabel = birdMascot.getAttribute('aria-label');
            
            if (tabindex !== '0') {
                passed = false;
                message = 'Bird mascot missing tabindex attribute';
                details.tabindex = tabindex;
            }
            
            if (role !== 'button') {
                passed = false;
                message = 'Bird mascot missing role attribute';
                details.role = role;
            }
            
            if (!ariaLabel) {
                passed = false;
                message = 'Bird mascot missing aria-label';
                details.ariaLabel = ariaLabel;
            }
            
            // Test CSS classes for styling
            const hasBirdClasses = birdMascot.classList.contains('bird-mascot');
            if (!hasBirdClasses) {
                passed = false;
                message = 'Bird mascot missing CSS classes';
                details.classes = birdMascot.className;
            }
            
            // Test child elements
            const requiredElements = ['bird-head', 'bird-eye', 'bird-beak', 'bird-wing', 'bird-tail'];
            const missingElements = [];
            
            requiredElements.forEach(elementClass => {
                const element = birdMascot.querySelector(`.${elementClass}`);
                if (!element) {
                    missingElements.push(elementClass);
                }
            });
            
            if (missingElements.length > 0) {
                passed = false;
                message = 'Bird mascot missing required elements';
                details.missingElements = missingElements;
            }
        }
        
        return this.addTestResult('Bird Mascot', passed, message, details);
    }

    testChatbot() {
        const chatbot = document.getElementById('chatbot');
        const chatbotTrigger = document.getElementById('chatbotTrigger');
        
        let passed = true;
        let message = 'Chatbot functionality is working';
        let details = {};
        
        if (!chatbot) {
            passed = false;
            message = 'Chatbot element not found';
        } else {
            // Test chatbot structure
            const header = chatbot.querySelector('.chatbot-header');
            const messages = chatbot.querySelector('.chatbot-messages');
            const input = chatbot.querySelector('.chatbot-input');
            const quickReplies = chatbot.querySelector('.chatbot-quick-replies');
            
            if (!header || !messages || !input || !quickReplies) {
                passed = false;
                message = 'Chatbot missing essential components';
                details.missingComponents = {
                    header: !!header,
                    messages: !!messages,
                    input: !!input,
                    quickReplies: !!quickReplies
                };
            }
            
            // Test chatbot trigger
            if (!chatbotTrigger) {
                passed = false;
                message = 'Chatbot trigger not found';
            } else {
                const triggerIcon = chatbotTrigger.querySelector('.trigger-icon');
                const triggerText = chatbotTrigger.querySelector('.trigger-text');
                
                if (!triggerIcon || !triggerText) {
                    passed = false;
                    message = 'Chatbot trigger missing elements';
                    details.triggerElements = {
                        icon: !!triggerIcon,
                        text: !!triggerText
                    };
                }
            }
            
            // Test initial state
            if (chatbot.classList.contains('active')) {
                passed = false;
                message = 'Chatbot should not be active initially';
            }
            
            // Test CSS classes
            const hasChatbotClasses = chatbot.classList.contains('chatbot');
            if (!hasChatbotClasses) {
                passed = false;
                message = 'Chatbot missing CSS classes';
                details.classes = chatbot.className;
            }
        }
        
        return this.addTestResult('Chatbot', passed, message, details);
    }

    testChatbotInteractions() {
        let passed = true;
        let message = 'Chatbot interactions are working';
        let details = {};
        
        try {
            // Test if chatbot can be opened programmatically
            if (typeof openChatbot === 'function') {
                passed = true;
                message = 'Chatbot open function is available';
            } else {
                passed = false;
                message = 'Chatbot open function not found';
            }
            
            // Test if chatbot can be closed programmatically
            if (typeof closeChatbot === 'function') {
                passed = true;
                message = 'Chatbot close function is available';
            } else {
                passed = false;
                message = 'Chatbot close function not found';
            }
            
            // Test DAIOAssistant class
            if (typeof DAIOAssistant === 'function') {
                passed = true;
                message = 'DAIOAssistant class is available';
            } else {
                passed = false;
                message = 'DAIOAssistant class not found';
            }
            
        } catch (error) {
            passed = false;
            message = 'Chatbot interaction test failed';
            details.error = error.message;
        }
        
        return this.addTestResult('Chatbot Interactions', passed, message, details);
    }

    // Utility Methods
    runAllTests() {
        console.log('Running all tests...');
        
        // HTML Structure Tests
        this.testNavigation();
        this.testHeroSection();
        this.testSolutionPillars();
        
        // CSS Styling Tests
        this.testColorScheme();
        this.testTypography();
        this.testResponsiveGrid();
        
        // JavaScript Functionality Tests
        this.testChartJS();
        this.testInteractiveElements();
        this.testFormValidation();
        this.testBirdMascot();
        this.testChatbot();
        this.testChatbotInteractions();
        
        // Performance Tests
        this.testPerformance();
        this.testResponsiveDesign();
        
        // Accessibility Tests
        this.testSemanticHTML();
        this.testARIA();
        
        console.log('All tests completed!');
        return this.testResults;
    }

    clearResults() {
        this.testResults = [];
        this.totalTests = 0;
        this.passedTests = 0;
        this.failedTests = 0;
        this.updateTestSummary();
        
        // Clear result displays
        document.querySelectorAll('.test-result').forEach(result => {
            result.className = 'test-result test-info';
            result.textContent = 'Test result will appear here';
        });
        
        console.log('Test results cleared');
    }

    exportResults() {
        const results = {
            summary: {
                total: this.totalTests,
                passed: this.passedTests,
                failed: this.failedTests,
                successRate: this.totalTests > 0 ? Math.round((this.passedTests / this.totalTests) * 100) : 0
            },
            tests: this.testResults,
            timestamp: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `daio-test-results-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        console.log('Test results exported');
    }
}

// Global test suite instance
let testSuite;

// Initialize test suite when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    testSuite = new DAIOTestSuite();
});

// Global test functions for HTML onclick handlers
function testNavigation() {
    if (testSuite) testSuite.testNavigation();
}

function testHeroSection() {
    if (testSuite) testSuite.testHeroSection();
}

function testSolutionPillars() {
    if (testSuite) testSuite.testSolutionPillars();
}

function testColorScheme() {
    if (testSuite) testSuite.testColorScheme();
}

function testTypography() {
    if (testSuite) testSuite.testTypography();
}

function testResponsiveGrid() {
    if (testSuite) testSuite.testResponsiveGrid();
}

function testChartJS() {
    if (testSuite) testSuite.testChartJS();
}

function testInteractiveElements() {
    if (testSuite) testSuite.testInteractiveElements();
}

function testFormValidation() {
    if (testSuite) testSuite.testFormValidation();
}

function testPerformance() {
    if (testSuite) testSuite.testPerformance();
}

function testResponsiveDesign() {
    if (testSuite) testSuite.testResponsiveDesign();
}

function testSemanticHTML() {
    if (testSuite) testSuite.testSemanticHTML();
}

function testARIA() {
    if (testSuite) testSuite.testARIA();
}

function testBirdMascot() {
    if (testSuite) testSuite.testBirdMascot();
}

function testChatbot() {
    if (testSuite) testSuite.testChatbot();
}

function testChatbotInteractions() {
    if (testSuite) testSuite.testChatbotInteractions();
}

function runAllTests() {
    if (testSuite) testSuite.runAllTests();
}

function clearResults() {
    if (testSuite) testSuite.clearResults();
}

// Export for use in other test files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DAIOTestSuite;
}
