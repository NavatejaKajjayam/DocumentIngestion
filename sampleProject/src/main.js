import { setupCounter } from './counter.js';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('counter-value');
  if (counterElement) {
    setupCounter(counterElement);
  } else {
    console.error('Counter element not found');
  }
});