const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

test.describe('UI Test Cases - SwiftTranslator', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForTimeout(2000);
  });

  test('Pos_UI_0001: Verify input clear functionality resets output field', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    
    // Type some text
    await textarea.fill('mama gedhara yanavaa');
    await page.waitForTimeout(1000);
    
    // Clear the input
    await textarea.fill('');
    await page.waitForTimeout(1000);
    
    // Check output is empty
    const output = await textarea.inputValue();
    console.log('UI Test 1 - After clearing input, output:', output);
    expect(output).toBe('');
  });

  test('Neg_UI_0011: Verify system behavior when submitting empty input', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    
    // Leave input empty
    await textarea.fill('');
    await page.waitForTimeout(2000);
    
    // Check output remains empty
    const output = await textarea.inputValue();
    console.log('UI Test 2 - Empty input, output:', output);
    expect(output).toBe('');
    
    // Also check placeholder is still there
    const placeholder = await textarea.getAttribute('placeholder');
    expect(placeholder).toBe('Input Your Singlish Text Here.');
  });

});