const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

test.describe('Negative Functional Tests - SwiftTranslator', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForTimeout(2000);
  });

  // Helper function to get output value
  async function getOutputValue(page) {
    const selectors = [
      'textarea',
      'div',
      'pre',
      'code',
      '.output',
      '#output',
      '[class*="output"]',
      '[class*="result"]',
      'p',
      'span'
    ];
    
    for (const selector of selectors) {
      const elements = page.locator(selector);
      const count = await elements.count();
      
      for (let i = 0; i < count; i++) {
        const element = elements.nth(i);
        const text = await element.textContent();
        const value = await element.inputValue().catch(() => null);
        const content = value || text || '';
        
        if (content.trim().length > 0) {
          return content.trim();
        }
      }
    }
    
    return '';
  }

  // Helper to fill input field
  async function fillInputField(page, text) {
    const inputTextarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputTextarea.fill(text);
    await page.waitForTimeout(3000);
  }

  // Neg_Fun_0001 - Handle mixed symbols within sentence
  test('Neg_Fun_0001: Handle mixed symbols within sentence - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'mama vaedata @ yanne  ## bas eken');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should remove symbols
    const expectedOutput = 'මම වැඩට යන්නෙ බස් එකෙන්';
    
    // This assertion will FAIL because actual output contains symbols
    // From Excel: Actual = 'මම වැඩට @ යන්නෙ  ## බස් එකෙන්'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0002 - Handle emoji mixed input
  test('Neg_Fun_0002: Handle emoji mixed input - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'mama 😊 yannavaa');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should remove emoji
    const expectedOutput = 'මම යනවා';
    
    // This assertion will FAIL because actual output contains emoji
    // From Excel: Actual = 'මම 😊 යනවා'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0003 - Handle unnecessary punctuation overload
  test('Neg_Fun_0003: Handle unnecessary punctuation overload - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'mama gedhara yanavaa!!!');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should remove excess punctuation
    const expectedOutput = 'මම ගෙදර යනවා';
    
    // This assertion will FAIL because actual output contains !!!
    // From Excel: Actual = 'මම ගෙදර යනවා!!!'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0004 - Handle heavy spelling errors
  test('Neg_Fun_0004: Handle heavy spelling errors - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'mmoaa vaedaa karnva');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should correct spelling
    const expectedOutput = 'මම වැඩ කරනවා';
    
    // This assertion will FAIL because actual output is garbled
    // From Excel: Actual = 'ම්මොආ වැඩා කර්න්ව'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0005 - Handle broken sentence structure with excessive space
  test('Neg_Fun_0005: Handle broken sentence structure with excessive space - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'yanawa mama office          adha');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should handle excessive spaces properly
    const expectedOutput = 'යනවා මම office අද';
    
    // This assertion will FAIL because actual output has incorrect word
    // From Excel: Actual = 'යනwඅ මම office          අද.'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0006 - Joined words without spacing
  test('Neg_Fun_0006: Joined words without spacing - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'mamakadeetagihillaaennam');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should separate words
    const expectedOutput = 'මම කඩේට ගිහිල්ලා එන්නම්';
    
    // This assertion will FAIL because actual output is joined without spaces
    // From Excel: Actual = 'මමකඩේටගිහිල්ලාඑන්නම්'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0007 - Convert interrogative sentence with spelling ambiguity
  test('Neg_Fun_0007: Convert interrogative sentence with spelling ambiguity - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'oyaata eeka karanna puluwanda');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should handle spelling correctly
    const expectedOutput = 'ඔයාට ඒක කරන්න පුලුවන්ද';
    
    // This assertion will FAIL because actual output has typo
    // From Excel: Actual = 'ඔයාට ඒක කරන්න පුලුwඅන්ඩ'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0008 - Handle extremely long meaningless input
  test('Neg_Fun_0008: Handle extremely long meaningless input - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'MAMA IIYE OYAAVA DHAEKKAA');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should translate uppercase
    const expectedOutput = 'මම ඊයෙ ඔයාව දැක්කා';
    
    // This assertion will FAIL because actual output is same as input
    // From Excel: Actual = 'MAMA IIYE OYAAVA DHAEKKAA'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0009 - Excessive repeated characters
  test('Neg_Fun_0009: Excessive repeated characters - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'maaaaama yannavaaaa');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should handle repeated characters
    const expectedOutput = 'මම යනවා';
    
    // This assertion will FAIL because actual output has extra characters
    // From Excel: Actual = 'මාආඅම යන්නවාආ'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0010 - Handle numeric slang with Singlish input
  test('Neg_Fun_0010: Handle numeric slang with Singlish input - SHOULD FAIL', async ({ page }) => {
    await fillInputField(page, 'mage 4n eka kaedilaa');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: System should convert "4n" to "phone"
    const expectedOutput = 'මගේ phone එක කැඩිලා';
    
    // This assertion will FAIL because actual output contains "4n"
    // From Excel: Actual = 'mage 4n එක කැඩිලා'
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_UI_0011 - Verify system behavior when submitting empty input
  test('Neg_UI_0011: Verify system behavior when submitting empty input - SHOULD FAIL', async ({ page }) => {
    // Leave input empty
    const inputTextarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputTextarea.fill('');
    await page.waitForTimeout(3000);
    
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Output should be empty AND system should show error message
    // The test fails because system doesn't guide user with error
    
    // First check output is empty (this might pass)
    expect(actualOutput).toBe('');
    
    // Check for error message - system SHOULD show error but doesn't
    // This assertion will FAIL
    const errorSelectors = [
      '.error',
      '[class*="error"]',
      '[class*="alert"]',
      '[class*="message"]',
      '[class*="warning"]',
      '[class*="info"]'
    ];
    
    let hasError = false;
    
    for (const selector of errorSelectors) {
      const elements = page.locator(selector);
      const count = await elements.count();
      if (count > 0) {
        hasError = true;
        break;
      }
    }
    
    // System should show error message for empty input
    // This assertion will FAIL because system doesn't show error
    expect(hasError).toBe(true);
  });

});