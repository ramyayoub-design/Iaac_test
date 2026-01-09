# Architecture

## Overview
This is a small static project composed of plain HTML pages styled with a single `styles.css` file and a small `app.js` for behavior. It is intended to be lightweight and easy to extend.

## Components
- HTML: `index.html`, `cv.html`, `docs.html` — page structure and content
- CSS: `styles.css` — shared layout, typography, and print styles
- JavaScript: `app.js` — navigation active-state and print button handler

## Page Flow
- `index.html` links to `cv.html` and `docs.html`.
- All pages include `styles.css` and `app.js`.
- `cv.html` contains the printable CV content; `docs.html` lists documentation files.

## Interaction Diagram

index.html
  ↓
cv.html ←→ styles.css
docs.html ←→ app.js

