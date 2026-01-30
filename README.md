# SwiftTranslator Playwright Tests

This project implements a comprehensive automated testing framework for the [SwiftTranslator](https://www.swifttranslator.com/) website using Microsoft Playwright. The test suite validates Singlish to Sinhala translation functionality through systematic functional and UI testing methodologies.

Tests run **headless by default**, with an HTML report to view results locally.

---

##  Prerequisites

- [Node.js](https://nodejs.org/en/) v18 or higher  
- npm (comes with Node.js)

---

##  Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Tharushi111/swifttranslator-tests.git
cd swifttranslator-tests
```
2. Install dependencies:

```bash
npm install
```
3. Install Playwright browsers:

```bash
npx playwright install

```

4. Running Tests

Run all tests (headless):
```bash
npm run test
```
Run specific test suites

Positive functional tests:
```bash
npm run test:positive
```
Negative functional tests:

```bash
npm run test:negative
```
UI tests:

```bash
npm run test:ui
```
Run tests in headed mode (see browser while testing):
```bash
npx playwright test --headed
```
Viewing HTML Report

After running tests:
```bash
npm run report
```
This opens a local HTML report showing pass/fail results. By default, the report is saved at:


playwright-report/index.html


- npx playwright show-report --port=9323

**Then open in your browser: http://localhost:9323**


## Assignment Information

Course: IT3040 - ITPM

Author: Assignment submission for IT3040 ITPM Course

Assignment: Assignment 1

