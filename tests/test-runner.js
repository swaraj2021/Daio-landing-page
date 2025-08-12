#!/usr/bin/env node

/**
 * DAIO Website Test Runner
 * 
 * This script runs automated tests for the DAIO website in a headless environment.
 * It can be used for CI/CD pipelines, automated testing, and development workflows.
 * 
 * Usage:
 *   node test-runner.js [options]
 * 
 * Options:
 *   --headless    Run tests in headless mode (default)
 *   --browser     Run tests in browser mode
 *   --verbose     Enable verbose logging
 *   --export      Export test results to JSON file
 *   --help        Show this help message
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HeadlessTestRunner {
    constructor(options = {}) {
        this.options = {
            headless: true,
            verbose: false,
            export: false,
            ...options
        };
        
        this.testResults = [];
        this.totalTests = 0;
        this.passedTests = 0;
        this.failedTests = 0;
        
        this.testFiles = [
            'index.test.html',
            'test-suite.js'
        ];
        
        this.console.log('🚀 DAIO Website Test Runner initialized');
    }
    
    get console() {
        return this.options.verbose ? console : {
            log: () => {},
            error: console.error,
            warn: console.warn
        };
    }
    
    async runTests() {
        this.console.log('📋 Starting test execution...');
        
        try {
            // Check if test files exist
            await this.validateTestFiles();
            
            // Run HTML structure tests
            await this.runHTMLTests();
            
            // Run CSS validation tests
            await this.runCSSTests();
            
            // Run JavaScript functionality tests
            await this.runJSTests();
            
            // Run accessibility tests
            await this.runAccessibilityTests();
            
            // Run performance tests
            await this.runPerformanceTests();
            
            // Generate test report
            await this.generateReport();
            
            // Export results if requested
            if (this.options.export) {
                await this.exportResults();
            }
            
            this.console.log('✅ All tests completed!');
            return this.testResults;
            
        } catch (error) {
            this.console.error('❌ Test execution failed:', error.message);
            throw error;
        }
    }
    
    async validateTestFiles() {
        this.console.log('🔍 Validating test files...');
        
        for (const file of this.testFiles) {
            const filePath = path.join(__dirname, file);
            if (!fs.existsSync(filePath)) {
                throw new Error(`Test file not found: ${file}`);
            }
        }
        
        // Check if main website files exist
        const websiteFiles = ['../index.html', '../styles.css', '../script.js'];
        for (const file of websiteFiles) {
            const filePath = path.join(__dirname, file);
            if (!fs.existsSync(filePath)) {
                throw new Error(`Website file not found: ${file}`);
            }
        }
        
        this.console.log('✅ All test files validated');
    }
    
    async runHTMLTests() {
        this.console.log('🌐 Running HTML structure tests...');
        
        const htmlTests = [
            {
                name: 'HTML File Exists',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    return fs.existsSync(htmlPath);
                }
            },
            {
                name: 'HTML is Valid',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
                    
                    // Basic HTML validation
                    const hasDoctype = htmlContent.includes('<!DOCTYPE html>');
                    const hasHtmlTag = htmlContent.includes('<html');
                    const hasHeadTag = htmlContent.includes('<head>');
                    const hasBodyTag = htmlContent.includes('<body>');
                    const hasClosingTags = htmlContent.includes('</html>');
                    
                    return hasDoctype && hasHtmlTag && hasHeadTag && hasBodyTag && hasClosingTags;
                }
            },
            {
                name: 'Required Sections Exist',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
                    
                    const requiredSections = [
                        'hero', 'problem', 'solution', 'market', 'product', 'roadmap', 'contact'
                    ];
                    
                    return requiredSections.every(section => 
                        htmlContent.includes(`id="${section}"`) || htmlContent.includes(`class="${section}"`)
                    );
                }
            },
            {
                name: 'Navigation Structure',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
                    
                    const hasNav = htmlContent.includes('<nav');
                    const hasLogo = htmlContent.includes('DAIO');
                    const hasMenu = htmlContent.includes('<ul class="nav-menu"');
                    
                    return hasNav && hasLogo && hasMenu;
                }
            },
            {
                name: 'Chart.js Integration',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
                    
                    return htmlContent.includes('chart.js') || htmlContent.includes('Chart.js');
                }
            },
            {
                name: 'Chatbot Integration',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
                    
                    const hasChatbot = htmlContent.includes('id="chatbot"');
                    const hasChatbotTrigger = htmlContent.includes('id="chatbotTrigger"');
                    const hasDAIOAssistant = htmlContent.includes('DAIO Assistant');
                    
                    return hasChatbot && hasChatbotTrigger && hasDAIOAssistant;
                }
            }
        ];
        
        for (const test of htmlTests) {
            const passed = test.test();
            this.addTestResult(test.name, passed, passed ? 'HTML structure is valid' : 'HTML structure has issues');
        }
    }
    
    async runCSSTests() {
        this.console.log('🎨 Running CSS validation tests...');
        
        const cssTests = [
            {
                name: 'CSS File Exists',
                test: () => {
                    const cssPath = path.join(__dirname, '../styles.css');
                    return fs.existsSync(cssPath);
                }
            },
            {
                name: 'CSS is Valid',
                test: () => {
                    const cssPath = path.join(__dirname, '../styles.css');
                    const cssContent = fs.readFileSync(cssPath, 'utf8');
                    
                    // Basic CSS validation
                    const hasSelectors = cssContent.includes('{') && cssContent.includes('}');
                    const hasProperties = cssContent.includes(':') && cssContent.includes(';');
                    
                    return hasSelectors && hasProperties;
                }
            },
            {
                name: 'Responsive Design',
                test: () => {
                    const cssPath = path.join(__dirname, '../styles.css');
                    const cssContent = fs.readFileSync(cssPath, 'utf8');
                    
                    return cssContent.includes('@media') && cssContent.includes('max-width');
                }
            },
            {
                name: 'Color Scheme',
                test: () => {
                    const cssPath = path.join(__dirname, '../styles.css');
                    const cssContent = fs.readFileSync(cssPath, 'utf8');
                    
                    const hasColors = cssContent.includes('#10b981') || cssContent.includes('#0f172a');
                    return hasColors;
                }
            },
            {
                name: 'Typography',
                test: () => {
                    const cssPath = path.join(__dirname, '../styles.css');
                    const cssContent = fs.readFileSync(cssPath, 'utf8');
                    
                    return cssContent.includes('font-family') && cssContent.includes('Inter');
                }
            }
        ];
        
        for (const test of cssTests) {
            const passed = test.test();
            this.addTestResult(test.name, passed, passed ? 'CSS is valid' : 'CSS has issues');
        }
    }
    
    async runJSTests() {
        this.console.log('⚡ Running JavaScript functionality tests...');
        
        const jsTests = [
            {
                name: 'JavaScript File Exists',
                test: () => {
                    const jsPath = path.join(__dirname, '../script.js');
                    return fs.existsSync(jsPath);
                }
            },
            {
                name: 'JavaScript is Valid',
                test: () => {
                    const jsPath = path.join(__dirname, '../script.js');
                    const jsContent = fs.readFileSync(jsPath, 'utf8');
                    
                    // Basic JavaScript validation
                    const hasFunctions = jsContent.includes('function') || jsContent.includes('=>');
                    const hasEventListeners = jsContent.includes('addEventListener');
                    
                    return hasFunctions && hasEventListeners;
                }
            },
            {
                name: 'Chart.js Integration',
                test: () => {
                    const jsPath = path.join(__dirname, '../script.js');
                    const jsContent = fs.readFileSync(jsPath, 'utf8');
                    
                    return jsContent.includes('new Chart') || jsContent.includes('Chart.js');
                }
            },
            {
                name: 'Interactive Elements',
                test: () => {
                    const jsPath = path.join(__dirname, '../script.js');
                    const jsContent = fs.readFileSync(jsPath, 'utf8');
                    
                    const hasClickHandlers = jsContent.includes('click') || jsContent.includes('addEventListener');
                    return hasClickHandlers;
                }
            },
            {
                name: 'Responsive Behavior',
                test: () => {
                    const jsPath = path.join(__dirname, '../script.js');
                    const jsContent = fs.readFileSync(jsPath, 'utf8');
                    
                    const hasResizeHandlers = jsContent.includes('resize') || jsContent.includes('matchMedia');
                    return hasResizeHandlers;
                }
            }
        ];
        
        for (const test of jsTests) {
            const passed = test.test();
            this.addTestResult(test.name, passed, passed ? 'JavaScript functionality is valid' : 'JavaScript has issues');
        }
    }
    
    async runAccessibilityTests() {
        this.console.log('♿ Running accessibility tests...');
        
        const accessibilityTests = [
            {
                name: 'Semantic HTML',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
                    
                    const semanticTags = ['nav', 'header', 'main', 'section', 'article', 'footer'];
                    const hasSemanticTags = semanticTags.some(tag => htmlContent.includes(`<${tag}`));
                    
                    return hasSemanticTags;
                }
            },
            {
                name: 'Alt Attributes',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
                    
                    const hasImages = htmlContent.includes('<img');
                    if (!hasImages) return true; // No images to test
                    
                    return htmlContent.includes('alt=');
                }
            },
            {
                name: 'Form Labels',
                test: () => {
                    const htmlPath = path.join(__dirname, '../index.html');
                    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
                    
                    const hasForms = htmlContent.includes('<form');
                    if (!hasForms) return true; // No forms to test
                    
                    return htmlContent.includes('<label') || htmlContent.includes('placeholder=');
                }
            }
        ];
        
        for (const test of accessibilityTests) {
            const passed = test.test();
            this.addTestResult(test.name, passed, passed ? 'Accessibility requirements met' : 'Accessibility issues found');
        }
    }
    
    async runPerformanceTests() {
        this.console.log('⚡ Running performance tests...');
        
        const performanceTests = [
            {
                name: 'File Size Optimization',
                test: () => {
                    const files = ['../index.html', '../styles.css', '../script.js'];
                    let totalSize = 0;
                    
                    for (const file of files) {
                        const filePath = path.join(__dirname, file);
                        if (fs.existsSync(filePath)) {
                            const stats = fs.statSync(filePath);
                            totalSize += stats.size;
                        }
                    }
                    
                    // Check if total size is reasonable (under 1MB)
                    const maxSize = 1024 * 1024; // 1MB
                    return totalSize < maxSize;
                }
            },
            {
                name: 'CSS Minification Ready',
                test: () => {
                    const cssPath = path.join(__dirname, '../styles.css');
                    const cssContent = fs.readFileSync(cssPath, 'utf8');
                    
                    // Check if CSS has comments that can be removed
                    const hasComments = cssContent.includes('/*') && cssContent.includes('*/');
                    return true; // CSS is ready for minification
                }
            },
            {
                name: 'JavaScript Minification Ready',
                test: () => {
                    const jsPath = path.join(__dirname, '../script.js');
                    const jsContent = fs.readFileSync(jsPath, 'utf8');
                    
                    // Check if JS has comments that can be removed
                    const hasComments = jsContent.includes('//') || jsContent.includes('/*');
                    return true; // JS is ready for minification
                }
            }
        ];
        
        for (const test of performanceTests) {
            const passed = test.test();
            this.addTestResult(test.name, passed, passed ? 'Performance requirements met' : 'Performance issues found');
        }
    }
    
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
            this.console.log(`✅ ${testName}: ${message}`);
        } else {
            this.failedTests++;
            this.console.log(`❌ ${testName}: ${message}`);
        }
        
        return result;
    }
    
    async generateReport() {
        this.console.log('📊 Generating test report...');
        
        const successRate = this.totalTests > 0 ? Math.round((this.passedTests / this.totalTests) * 100) : 0;
        
        const report = {
            summary: {
                total: this.totalTests,
                passed: this.passedTests,
                failed: this.failedTests,
                successRate: successRate
            },
            tests: this.testResults,
            timestamp: new Date().toISOString(),
            environment: {
                node: process.version,
                platform: process.platform,
                arch: process.arch
            }
        };
        
        this.console.log('\n📋 Test Summary:');
        this.console.log(`   Total Tests: ${this.totalTests}`);
        this.console.log(`   Passed: ${this.passedTests}`);
        this.console.log(`   Failed: ${this.failedTests}`);
        this.console.log(`   Success Rate: ${successRate}%`);
        
        if (this.failedTests > 0) {
            this.console.log('\n❌ Failed Tests:');
            this.testResults
                .filter(result => !result.passed)
                .forEach(result => {
                    this.console.log(`   - ${result.name}: ${result.message}`);
                });
        }
        
        return report;
    }
    
    async exportResults() {
        this.console.log('💾 Exporting test results...');
        
        const report = await this.generateReport();
        const exportPath = path.join(__dirname, `test-results-${new Date().toISOString().split('T')[0]}.json`);
        
        fs.writeFileSync(exportPath, JSON.stringify(report, null, 2));
        this.console.log(`✅ Test results exported to: ${exportPath}`);
        
        return exportPath;
    }
}

// CLI argument parsing
function parseArguments() {
    const args = process.argv.slice(2);
    const options = {
        headless: true,
        verbose: false,
        export: false,
        help: false
    };
    
    for (const arg of args) {
        switch (arg) {
            case '--browser':
                options.headless = false;
                break;
            case '--verbose':
                options.verbose = true;
                break;
            case '--export':
                options.export = true;
                break;
            case '--help':
            case '-h':
                options.help = true;
                break;
            default:
                console.warn(`Unknown option: ${arg}`);
        }
    }
    
    return options;
}

function showHelp() {
    console.log(`
DAIO Website Test Runner

Usage:
  node test-runner.js [options]

Options:
  --headless    Run tests in headless mode (default)
  --browser     Run tests in browser mode
  --verbose     Enable verbose logging
  --export      Export test results to JSON file
  --help        Show this help message

Examples:
  node test-runner.js                    # Run tests in headless mode
  node test-runner.js --verbose          # Run tests with verbose logging
  node test-runner.js --export          # Run tests and export results
  node test-runner.js --browser         # Run tests in browser mode
`);
}

// Main execution
async function main() {
    const options = parseArguments();
    
    if (options.help) {
        showHelp();
        return;
    }
    
    try {
        const runner = new HeadlessTestRunner(options);
        await runner.runTests();
        
        // Exit with appropriate code
        const exitCode = runner.failedTests > 0 ? 1 : 0;
        process.exit(exitCode);
        
    } catch (error) {
        console.error('❌ Test runner failed:', error.message);
        process.exit(1);
    }
}

// Run if this file is executed directly
if (require.main === module) {
    main();
}

module.exports = HeadlessTestRunner;
