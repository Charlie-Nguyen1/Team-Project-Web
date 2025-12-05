// Cypress support file - e2e.js
// You can use this file to run code before your test files.

beforeEach(() => {
  // Handle any uncaught exceptions
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
});

// Add custom commands here if needed
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Helper to check element visibility
Cypress.Commands.add('shouldBeVisible', (selector) => {
  cy.get(selector).should('be.visible');
});
