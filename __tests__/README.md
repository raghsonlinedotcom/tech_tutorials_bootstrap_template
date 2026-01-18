# Version History Unit Tests

This directory contains comprehensive unit tests for the version history section of the Bootstrap Technical Tutorial Template.

## Test Coverage

The test suite covers the following areas:

### 1. Version History Section Rendering with Initial Release Details
- ✅ Version history section renders with correct ID and classes
- ✅ Header displays with proper styling and icon
- ✅ Lead paragraph explains the purpose
- ✅ Version 1.0.0 details are rendered correctly
- ✅ "Current" badge is displayed
- ✅ Overview section contains correct content
- ✅ All major feature categories are listed
- ✅ Technical stack information is displayed
- ✅ Known limitations section is present
- ✅ Future enhancement ideas are listed
- ✅ Feature items have success check icons

### 2. Version History Accordion Expand/Collapse Behavior
- ✅ Accordion has correct ID and structure
- ✅ Version 1.0.0 is expanded by default
- ✅ Future versions section is collapsed by default
- ✅ Correct Bootstrap data attributes are present
- ✅ Accordion buttons have proper types and classes
- ✅ Accordion toggles visibility correctly
- ✅ Proper nested structure for all items

### 3. Future Versions Section - Semantic Versioning and Roadmap
- ✅ Future versions accordion item renders
- ✅ Plus-circle icon is displayed
- ✅ Semantic versioning explanation is present
- ✅ MAJOR, MINOR, and PATCH cards display correctly
- ✅ Roadmap section is rendered
- ✅ Short, medium, and long-term roadmap items exist
- ✅ List group structure for roadmap
- ✅ Informational note about future updates

### 4. Badges Display - Status and Version Information
- ✅ Status badges container exists
- ✅ "Status: Active Development" badge displays
- ✅ "Current: v1.0.0" badge displays
- ✅ "Last Updated" badge with date displays
- ✅ "Current" badge in version header
- ✅ Correct badge colors (secondary, info, success)
- ✅ Fixed version badge at bottom-right of page
- ✅ Proper badge styling classes

### 5. Integration Tests
- ✅ Version history link in navbar
- ✅ Version history link in off-canvas TOC
- ✅ Complete accordion structure
- ✅ All content is accessible

## Running the Tests

### Prerequisites

First, install the required dependencies:

```bash
npm install
```

### Run All Tests

To run the entire test suite:

```bash
npm test
```

### Run Tests in Watch Mode

For continuous testing during development:

```bash
npm run test:watch
```

### Generate Coverage Report

To generate a code coverage report:

```bash
npm run test:coverage
```

## Test Structure

```
__tests__/
├── README.md                    # This file
└── version-history.test.js      # Version history test suite
```

## Test Framework

- **Jest**: JavaScript testing framework
- **@testing-library/dom**: DOM testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM elements

## Mocks

The test suite includes mocks for:
- Bootstrap's Collapse component
- window.getComputedStyle for display state checking

## Writing Additional Tests

To add more tests for other sections:

1. Create a new test file in the `__tests__` directory
2. Follow the pattern used in `version-history.test.js`
3. Import the HTML file and query the DOM
4. Use descriptive test names and organize with `describe` blocks

Example:

```javascript
describe('Navigation Section', () => {
  beforeEach(() => {
    const htmlContent = fs.readFileSync(
      path.resolve(__dirname, '../tutorial-template.html'),
      'utf8'
    );
    document.body.innerHTML = htmlContent;
  });

  test('should render navbar', () => {
    const navbar = document.querySelector('.navbar');
    expect(navbar).toBeInTheDocument();
  });
});
```

## Continuous Integration

These tests can be integrated into CI/CD pipelines. Example GitHub Actions workflow:

```yaml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

## Test Statistics

- **Total Test Suites**: 1
- **Total Tests**: 54
- **Test Categories**: 5
- **Coverage Areas**: Version History, Accordion, Badges, Semantic Versioning, Roadmap

## Troubleshooting

### Tests Failing

1. Ensure all dependencies are installed: `npm install`
2. Check that `tutorial-template.html` exists in the root directory
3. Verify Jest configuration in `package.json`

### Coverage Issues

If coverage reports are not generating:
1. Check Jest configuration in `package.json`
2. Ensure `jest-environment-jsdom` is installed
3. Run with verbose flag: `npm test -- --verbose`

## Future Enhancements

Consider adding tests for:
- Theme toggle functionality
- Color flavor switching
- Navigation interactions
- Form element behavior
- Code copy functionality
- Toast notifications
- Modal interactions
