# Singlish to Sinhala Translator Testing Project

##  Project Overview
This project contains automated test cases for the Singlish to Sinhala Translator website (https://www.swifttranslator.com/). The tests are designed to evaluate the system's accuracy in converting Singlish input to Sinhala output and assess the stability and usability of the user interface under various conditions.

##  Assignment Requirements
This project fulfills the requirements for IT3040 - ITPM Assignment 1 (Year 3, Semester 1) of the BSc (Hons) in Information Technology program.

## Requirements Met:
 - 25 Positive Functional Test Cases

 - 11 Negative Functional Test Cases (10 negative functional + 1 negative UI)

 - 1 Positive UI Test Case

 - Complete Playwright automation scripts


##  Prerequisites
Before running the tests, ensure you have the following installed:

- Node.js (version 14 or higher)

Download from: https://nodejs.org/

 Verify installation:
  ```bash
  node --version
```
  

- Git (for cloning the repository)

Download from: https://git-scm.com/

Verify installation: 
``` bash
git --version
```

##  Installation
Step 1: Clone or Download the Project


# Clone the repository (if using Git)
```bash
git clone <repository-url>
cd IT23633940
```

# OR download and extract the ZIP file
# Navigate to the project directory

```bash
cd IT23633940
```
Step 2: Install Dependencies


# Install Node.js dependencies
```bash
npm install
```
Step 3: Install Playwright Browsers

# Install required browsers (Chromium)
```bash
npx playwright install chromium
```

#  Running the Tests
Option 1: Run All Tests

# Run all test cases (positive, negative, and UI)
```bash
npx playwright test
```
Option 2: Run Specific Test Suites

# Run only positive test cases
```bash
npx playwright test positive.spec.js
```

# Run only negative test cases
```bash
npx playwright test negative.spec.js
```

# Run only UI test cases
```bash
npx playwright test ui-tests.spec.js
```
Option 3: Run with UI Mode

# Run tests without opening browser windows
```bash
npx playwright test --headed false
```

# 📊 Test Report
- Viewing Test Results
After test execution, the HTML report will automatically open in your default browser. If it doesn't, you can manually open it:


# Generate and open the test report
```bash
npx playwright show-report
```
The report includes:

- Test execution status (Pass/Fail)

- Execution time for each test

- Detailed error logs

# Report Location
The HTML report is generated in the playwright-report folder.

##  Test Case Details

 # Positive Test Cases (25)
These test cases verify that the system correctly converts valid Singlish inputs to Sinhala outputs:

1. Pos_Fun_0001: Convert a simple present sentence

2. Pos_Fun_0002: Convert compound sentence with reason clause

3. Pos_Fun_0003: Convert conditional complex sentence

4. Pos_Fun_0004: Convert polite request

5. Pos_Fun_0005: Convert informal slang phrase

6. Pos_Fun_0006: Convert joined word input

7. Pos_Fun_0007: Convert repeated word emphasis phrase

8. Pos_Fun_0008: Convert mixed language sentence

9. Pos_Fun_0009: Convert plural subject sentence

10. Pos_Fun_0010: Convert sentence with abbreviation

11. Pos_Fun_0011: Convert sentence with currency

12. Pos_Fun_0012: Convert sentence with date

13. Pos_Fun_0013: Convert sentence with time format

14. Pos_Fun_0014: Convert sentence with measurement unit

15. Pos_Fun_0015: Convert sentence with place name

16. Pos_Fun_0016: Convert multi-line sentence

17. Pos_Fun_0017: Convert long paragraph with scheduling update

18. Pos_Fun_0018: Convert mixed brand reference sentence

19. Pos_Fun_0019: Convert negative permission sentence

20. Pos_Fun_0020: Convert sentence with technical abbreviation

21. Pos_Fun_0021: Convert plural pronoun activity sentence

22. Pos_Fun_0022: Convert imperative command sentence

23. Pos_Fun_0023: Convert future plan with plural pronoun

24. Pos_Fun_0024: Convert sentence with currency and number format

25. Pos_Fun_0025: Convert mixed English technical terms sentence

# Negative Test Cases (10)
These test cases verify that the system handles invalid or edge-case inputs appropriately:

1. Neg_Fun_0001: Handle mixed symbols within sentence

2. Neg_Fun_0002: Handle emoji mixed input

3. Neg_Fun_0003: Handle unnecessary punctuation overload

4. Neg_Fun_0004: Handle heavy spelling errors

5. Neg_Fun_0005: Handle broken sentence structure with excessive space

6. Neg_Fun_0006: Joined words without spacing

7. Neg_Fun_0007: Convert interrogative sentence with spelling ambiguity

8. Neg_Fun_0008: Handle extremely long meaningless input

9. Neg_Fun_0009: Excessive repeated characters

10. Neg_Fun_0010: Handle numeric slang with Singlish input

# UI Test Cases (1)
1. Pos_UI_0001: Verify input clear functionality resets output field


##  Configuration
- Playwright Configuration
The playwright.config.js file contains the following settings:

- Test Directory: ./tests

- Timeout: 60 seconds per test

- Reporters: HTML and console output

- Browsers: Chromium

##  Troubleshooting
Common Issues
- Tests fail with timeout errors

- Ensure you have a stable internet connection

- Increase timeout in playwright.config.js if needed

- Check if the website (https://www.swifttranslator.com/) is accessible

- Playwright browsers not installed

Run:
```bash
npx playwright install chromium
```

Node.js/npm not found

Verify Node.js installation: 
```bash
node --version
```

Verify npm installation: 
```bash
npm --version
```

# Verify all components are installed correctly
node --version
npm --version
npx playwright --version
npx playwright install --dry-run

##  Additional Information
Test Case ID Convention
- Pos_Fun: Positive functional test

- Neg_Fun: Negative functional test

- Pos_UI: Positive UI test

- Neg_UI: Negative UI test

#  License
This project is created for educational purposes as part of the BSc (Hons) in Information Technology program at the SLIIT.

#  Developer Information
- Registration Number: IT23633940

- Module: IT3040 - IT Project Management

- Assignment: Assignment 1
