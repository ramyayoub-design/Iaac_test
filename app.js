/**
 * app.js
 * Shared JavaScript for CV & Docs project.
 * Highlights active navigation link based on current page.
 */

(function() {
  'use strict';

  /**
   * Detect current page and highlight active nav link.
   */
  function highlightActiveNavLink() {
    // Get current pathname (e.g., /index.html, /cv.html, /docs.html)
    const currentPath = window.location.pathname;

    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');

      // Compare href with current path
      // Handle both /path/page.html and /index.html or just /
      const isActive =
        currentPath.endsWith(href) ||
        (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')));

      if (isActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Run on page load and attach optional print handler
  document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNavLink();
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  });
})();
