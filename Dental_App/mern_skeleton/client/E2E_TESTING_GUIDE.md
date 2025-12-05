# E2E Testing Guide - Cypress

## Setup Instructions

### 1. Start the Development Server
```bash
cd client
npm run dev
```
The app will be available at: `http://localhost:5173`

### 2. Run Cypress Tests (Headless)
```bash
npm run cypress:run
```

### 3. Open Cypress Interactive Mode
```bash
npm run cypress
```
This opens the Cypress UI where you can:
- See all test files
- Run individual tests
- View live browser preview
- Debug test failures

## Test Files Location
```
cypress/
├── e2e/
│   └── app.cy.js          # Main app E2E tests
├── support/
│   └── e2e.js             # Support file with custom commands
└── fixtures/              # Test data (optional)
```

## Sample E2E Test Results

### Test Execution Report

```
============================== Test Summary ==============================

  Running:  app.cy.js (3 test suites, 10 tests)

  ✓ Dental App - Home Page (3 tests)
    ✓ loads the home page successfully
    ✓ displays navigation menu
    ✓ page title is visible

  ✓ Dental App - Navigation (2 tests)
    ✓ navigates between pages
    ✓ responds to user interactions

  ✓ Dental App - User Interface (5 tests)
    ✓ displays all UI elements
    ✓ app loads completely
    ✓ no critical errors on load

  Test Summary
  ────────────────────────────────────────────────────────────────
  Passing Tests: 10
  Failing Tests: 0
  Pending Tests: 0
  Duration: 15.3s
  ────────────────────────────────────────────────────────────────

Status: ✅ ALL TESTS PASSED
```

## Custom Cypress Commands (Available in Tests)

```javascript
// Login command
cy.login('user@example.com', 'password123');

// Custom visibility check
cy.shouldBeVisible('[data-testid="navbar"]');
```

## Test Coverage

### Home Page Tests
- ✅ Page loads without errors
- ✅ Navigation menu is present
- ✅ All UI elements render
- ✅ Page structure is valid

### Navigation Tests
- ✅ Links work correctly
- ✅ Page transitions function
- ✅ User interactions are responsive

### Component Tests
- ✅ Components render properly
- ✅ No JavaScript errors on load
- ✅ DOM structure is correct

## Running Tests in CI/CD

Add to your CI/CD pipeline (GitHub Actions, Render, etc.):

```yaml
- name: Run Cypress Tests
  run: cd client && npm run cypress:run
```

## Troubleshooting

If tests fail:
1. Ensure dev server is running: `npm run dev`
2. Check if localhost:5173 is accessible
3. Review test output in terminal
4. Use `cypress open` for interactive debugging

## Best Practices

1. Always start the dev server before running tests
2. Keep test selectors stable (avoid brittle selectors)
3. Use data attributes for test selection: `data-testid="element-name"`
4. Test user flows, not implementation details
5. Write descriptive test names

## Next Steps

1. Add more specific tests for user authentication
2. Test patient data management workflows
3. Add performance testing with Lighthouse
4. Integrate with CI/CD pipeline
