# DAIO Website Test Suite

A comprehensive testing framework for the DAIO website that covers HTML structure, CSS styling, JavaScript functionality, accessibility, and performance.

## 🚀 Quick Start

### Prerequisites
- Node.js 14.0.0 or higher
- npm 6.0.0 or higher

### Installation
```bash
cd tests
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with verbose logging
npm run test:verbose

# Run tests and export results
npm run test:export

# Run tests in watch mode (for development)
npm run test:watch

# Run tests for CI/CD
npm run test:ci
```

## 📋 Test Coverage

### HTML Structure Tests
- **Navigation Structure**: Validates navigation menu, logo, and menu items
- **Hero Section**: Tests hero content, title, tagline, and buttons
- **Solution Pillars**: Verifies solution section structure and content
- **Bird Mascot**: Tests the new DAIO bird mascot implementation

### CSS Styling Tests
- **Color Scheme**: Validates consistent color usage
- **Typography**: Tests font loading and heading hierarchy
- **Responsive Grid**: Verifies responsive design implementation
- **Bird Mascot Styling**: Tests mascot appearance and animations

### JavaScript Functionality Tests
- **Chart.js Integration**: Validates chart rendering and functionality
- **Interactive Elements**: Tests journey steps and regulation points
- **Form Validation**: Verifies form input validation
- **Bird Mascot Interactivity**: Tests mascot click events and animations

### Performance Tests
- **Page Load Performance**: Measures load times and performance metrics
- **Responsive Design**: Tests mobile responsiveness and breakpoints
- **File Size Optimization**: Validates file sizes for production readiness

### Accessibility Tests
- **Semantic HTML**: Verifies proper HTML structure and semantics
- **ARIA Implementation**: Tests accessibility attributes and labels
- **Keyboard Navigation**: Ensures keyboard accessibility for interactive elements

## 🎯 Bird Mascot Tests

The bird mascot is a key visual element representing the DAIO brand. Tests verify:

- **Structure**: Head, eyes, beak, crest, wing, and tail elements
- **Styling**: Green color scheme, gradients, and responsive design
- **Interactivity**: Click events, hover effects, and animations
- **Accessibility**: Keyboard navigation, ARIA labels, and screen reader support
- **Responsiveness**: Mobile and tablet adaptations

## 🧪 Test Runner Options

### Command Line Options
```bash
node test-runner.js [options]

Options:
  --headless    Run tests in headless mode (default)
  --browser     Run tests in browser mode
  --verbose     Enable verbose logging
  --export      Export test results to JSON file
  --help        Show help message
```

### Examples
```bash
# Run tests with verbose output and export results
node test-runner.js --verbose --export

# Run tests in browser mode for debugging
node test-runner.js --browser

# Get help information
node test-runner.js --help
```

## 📊 Test Results

### Output Format
Tests generate detailed results including:
- Test name and status (PASS/FAIL)
- Detailed error messages
- Performance metrics
- Accessibility compliance
- Responsive design validation

### Export Options
Test results can be exported to JSON format for:
- CI/CD pipeline integration
- Performance monitoring
- Quality assurance reporting
- Development team feedback

## 🔧 Development

### Adding New Tests
1. Create test method in `DAIOTestSuite` class
2. Add test to `runAllTests()` method
3. Create global test function
4. Add test button to HTML test interface
5. Update test documentation

### Test Structure
```javascript
testNewFeature() {
    let passed = true;
    let message = 'Feature is working correctly';
    let details = {};
    
    // Test implementation
    const element = document.querySelector('.feature');
    if (!element) {
        passed = false;
        message = 'Feature element not found';
    }
    
    return this.addTestResult('New Feature', passed, message, details);
}
```

### Running Tests During Development
```bash
# Watch mode for automatic testing
npm run test:watch

# Lint and validate code
npm run validate

# Generate coverage report
npm run coverage
```

## 🚨 Troubleshooting

### Common Issues
1. **Tests not running**: Check Node.js version and dependencies
2. **Missing elements**: Ensure website files are in correct location
3. **CSS not loading**: Verify file paths and syntax
4. **JavaScript errors**: Check browser console for errors

### Debug Mode
```bash
# Enable verbose logging
npm run test:verbose

# Run specific test
node test-runner.js --verbose
```

## 📚 API Reference

### DAIOTestSuite Class
- `addTestResult(testName, passed, message, details)`: Add test result
- `runAllTests()`: Execute all tests
- `clearResults()`: Reset test results
- `exportResults()`: Export results to JSON

### Test Methods
- `testNavigation()`: Test navigation structure
- `testHeroSection()`: Test hero section and bird mascot
- `testSolutionPillars()`: Test solution section
- `testChartJS()`: Test Chart.js integration
- `testAccessibility()`: Test accessibility features

## 🤝 Contributing

### Code Style
- Use ES6+ syntax
- Follow ESLint configuration
- Add JSDoc comments for complex methods
- Maintain consistent naming conventions

### Testing Best Practices
- Test one feature per test method
- Provide clear error messages
- Include relevant test details
- Ensure tests are deterministic

## 📄 License

This test suite is part of the DAIO website project and follows the same licensing terms.

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section
2. Review test output and error messages
3. Verify website file structure
4. Contact the development team

---

**Note**: This test suite is designed to work with the DAIO website structure. Ensure all website files are present and properly configured before running tests.
