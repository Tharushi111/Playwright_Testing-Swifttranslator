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
  test('Neg_Fun_0001: Handle mixed symbols within sentence', async ({ page }) => {
    await fillInputField(page, 'mama vaedata @ yanne  ## bas eken');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Clean translation without symbols
    const expectedOutput = 'මම වැඩට යන්නෙ බස් එකෙන්';
    
    // This will FAIL because actual output contains symbols
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0002 - Handle emoji mixed input
  test('Neg_Fun_0002: Handle emoji mixed input', async ({ page }) => {
    await fillInputField(page, 'mama 😊 yannavaa');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Clean translation without emoji
    const expectedOutput = 'මම යනවා';
    
    // This will FAIL because actual output contains emoji
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0003 - Handle unnecessary punctuation overload
  test('Neg_Fun_0003: Handle unnecessary punctuation overload', async ({ page }) => {
    await fillInputField(page, 'mama gedhara yanavaa!!!???//');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Clean translation without excess punctuation
    const expectedOutput = 'මම ගෙදර යනවා';
    
    // This will FAIL because actual output has !!!???//
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0004 - Handle heavy spelling errors
  test('Neg_Fun_0004: Handle heavy spelling errors', async ({ page }) => {
    await fillInputField(page, 'mmoaa vaedaa karnva');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Correct translation or empty (shouldn't translate gibberish)
    // System should either show error OR not translate
    
    const isCorrectTranslation = actualOutput === 'මම වැඩ කරනවා';
    const isEmpty = actualOutput === '';
    
    // This will FAIL because system produces garbled text
    expect(isCorrectTranslation || isEmpty).toBeTruthy();
  });

  // Neg_Fun_0005 - Handle broken sentence structure with excessive space
  test('Neg_Fun_0005: Handle broken sentence structure with excessive space', async ({ page }) => {
    await fillInputField(page, 'yanawa mama office          adha');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Clean translation
    const expectedOutput = 'යනවා මම office අද';
    
    // This will FAIL because actual has typo "යනwඅ"
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0006 - Joined words without spacing
  test('Neg_Fun_0006: Joined words without spacing', async ({ page }) => {
    await fillInputField(page, 'mamakadeetagihillaaennam');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Properly separated words
    const expectedOutput = 'මම කඩේට ගිහිල්ලා එන්නම්';
    
    // This will FAIL because output is joined
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0007 - Convert interrogative sentence with spelling ambiguity
  test('Neg_Fun_0007: Convert interrogative sentence with spelling ambiguity', async ({ page }) => {
    await fillInputField(page, 'oyaata eeka karanna puluwanda');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Correct translation
    const expectedOutput = 'ඔයාට ඒක කරන්න පුලුවන්ද';
    
    // This will FAIL because actual has typo "පුලුwඅන්ඩ"
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0008 - Handle extremely long meaningless input
  test('Neg_Fun_0008: Handle extremely long meaningless input', async ({ page }) => {
    await fillInputField(page, 'MAMA IIYE OYAAVA DHAEKKAA');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Should translate lowercase version
    const expectedOutput = 'මම ඊයෙ ඔයාව දැක්කා';
    
    // This will FAIL because system returns uppercase (no translation)
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0009 - Excessive repeated characters
  test('Neg_Fun_0009: Excessive repeated characters', async ({ page }) => {
    await fillInputField(page, 'maaaaama yannavaaaa');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Clean translation
    const expectedOutput = 'මම යනවා';
    
    // This will FAIL because actual has extra chars "මාආඅම"
    expect(actualOutput).toBe(expectedOutput);
  });

  // Neg_Fun_0010 - Handle numeric slang with Singlish input
  test('Neg_Fun_0010: Handle numeric slang with Singlish input', async ({ page }) => {
    await fillInputField(page, 'mage 4n eka kaedilaa');
    const actualOutput = await getOutputValue(page);
    
    // EXPECTED: Should convert "4n" to "phone"
    const expectedOutput = 'මගේ phone එක කැඩිලා';
    
    // This will FAIL because actual contains "4n"
    expect(actualOutput).toBe(expectedOutput);
  });

});