# npm run test-coverage

```
npm run test:coverage

> tech-tutorial-bootstrap-template@1.0.0 test:coverage
> jest --coverage

 PASS  __tests__/version-history.test.js
  Version History Section
    1. Version History Section Rendering with Initial Release Details
      ✓ should render version history section with correct ID (47 ms)
      ✓ should display version history header with icon (25 ms)
      ✓ should display lead paragraph explaining version history (20 ms)
      ✓ should render initial release version 1.0.0 details (17 ms)
      ✓ should display "Current" badge for version 1.0.0 (42 ms)
      ✓ should render version 1.0.0 overview section (18 ms)
      ✓ should list all major feature categories (21 ms)
      ✓ should display technical stack information (18 ms)
      ✓ should display known limitations section (19 ms)
      ✓ should display future enhancement ideas (17 ms)
      ✓ should have feature items with success check icons (16 ms)
    2. Version History Accordion Expand/Collapse Behavior
      ✓ should have accordion with correct ID (20 ms)
      ✓ should have version 1.0.0 accordion item expanded by default (14 ms)
      ✓ should have future versions accordion item collapsed by default (14 ms)
      ✓ should have correct data-bs-toggle and data-bs-target attributes (14 ms)
      ✓ should have correct data-bs-parent attribute for accordion behavior (23 ms)
      ✓ should have accordion buttons with correct type (15 ms)
      ✓ should toggle accordion content visibility when clicking button (16 ms)
      ✓ should have proper accordion item structure (19 ms)
    3. Future Versions Section - Semantic Versioning and Roadmap
      ✓ should render future versions accordion item (14 ms)
      ✓ should have plus-circle icon for future versions (14 ms)
      ✓ should display semantic versioning explanation (14 ms)
      ✓ should display MAJOR version information card (17 ms)
      ✓ should display MINOR version information card (14 ms)
      ✓ should display PATCH version information card (14 ms)
      ✓ should have three semantic versioning cards (17 ms)
      ✓ should display roadmap section (15 ms)
      ✓ should display short term roadmap (v1.x) (13 ms)
      ✓ should display medium term roadmap (v2.x) (12 ms)
      ✓ should display long term roadmap (v3.x) (17 ms)
      ✓ should have roadmap items in a list group (12 ms)
      ✓ should display informational note about new versions (13 ms)
    4. Badges Display - Status and Version Information
      ✓ should display status badges at bottom of version history (13 ms)
      ✓ should display "Status: Active Development" badge (25 ms)
      ✓ should display "Current: v1.0.0" badge (14 ms)
      ✓ should display "Last Updated" badge with date (15 ms)
      ✓ should have "Current" badge in version 1.0.0 header (17 ms)
      ✓ should display version badge in correct colors (14 ms)
      ✓ should have fixed version badge at bottom-right of page (12 ms)
      ✓ should have proper badge styling classes (20 ms)
    Integration Tests
      ✓ should have version history link in navbar (14 ms)
      ✓ should have version history link in off-canvas TOC (13 ms)
      ✓ should have complete accordion structure with proper nesting (14 ms)
      ✓ should have all version history content accessible (17 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       44 passed, 44 total
Snapshots:   0 total
Time:        1.303 s
Ran all test suites.
```

