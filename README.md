# SwiftTranslator Playwright Tests

Automated **Playwright tests** for [SwiftTranslator](https://www.swifttranslator.com/) website, covering **positive functional, negative functional, and UI tests** for Singlish to Sinhala translation.

Tests run **headless by default** with an HTML report to view results locally.

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) v18 or higher  
- npm (comes with Node.js)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/swifttranslator-tests.git
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

 - Run all tests (headless): 

 ```bash
npm run test
```

- Run specific test suites:

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

5. Viewing HTML Report

After running tests:

```bash
npm run report
```

Opens a local HTML report showing pass/fail results. By default, the report is saved at:

```bash
playwright-report/index.html
```
```bash
npx playwright show-report --port=9323
```


Then open http://localhost:9323
 in your browser.

## Project Structure
.
├── tests/
│   ├── positive-functional.spec.js
│   ├── negative-functional.spec.js
│   └── ui-tests.spec.js
├── package.json
├── package-lock.json
└── playwright.config.js 

## Assignment Information

- Course: IT3040 - ITPM

- Author: Assignment submission for IT3040 ITPM Course

- Assignment: Assignment 1
