// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore jQuery related errors
    if (err.message.includes('jQuery is not defined')) {
      return false; // prevents the test from failing
    }
    // Otherwise, allow the error to propagate
    return true;
  });
