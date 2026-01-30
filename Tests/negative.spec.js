const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

test.describe('Negative Functional Tests - SwiftTranslator', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForTimeout(2000);
  });

  // Neg_Fun_0001 - Random symbol input
  test('Neg_Fun_0001: Handle random symbol input', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('&&&#');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('&&&#');
  });

  // Neg_Fun_0002 - Emoji mixed input
  test('Neg_Fun_0002: Handle emoji mixed input', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('mama 😊 yannavaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('mama 😊 yannavaa');
  });

  // Neg_Fun_0003 - Numeric only input
  test('Neg_Fun_0003: Handle numeric only input', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('1234567');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('1234567');
  });

  // Neg_Fun_0004 - Heavy spelling errors
  test('Neg_Fun_0004: Handle heavy spelling errors', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('mmoaa vaedaa karnva');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('mmoaa vaedaa karnva');
  });

  // Neg_Fun_0005 - Broken sentence structure
  test('Neg_Fun_0005: Handle broken sentence structure', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('yanawa mama office adha');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('yanawa mama office adha');
  });

  // Neg_Fun_0006 - Mixed symbols with sentence
  test('Neg_Fun_0006: Handle mixed symbols when sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('mama $$ yannavaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('mama $$ yannavaa');
  });

  // Neg_Fun_0007 - Meaningless English string
  test('Neg_Fun_0007: Handle meaningless English string', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('jsdsjcsdnjnjc');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('jsdsjcsdnjnjc');
  });

  // Neg_Fun_0008 - Extremely long meaningless input
  test('Neg_Fun_0008: Handle extremely long meaningless input', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const longInput = 'abc abc abc abc abc abc abc abc abc abc abb abb abb abb abb aaa';
    await textarea.fill(longInput);
    await page.waitForTimeout(3000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe(longInput);
  });

  // Neg_Fun_0009 - Excessive repeated characters
  test('Neg_Fun_0009: Excessive repeated characters', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('maaaaama yannavaaaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('maaaaama yannavaaaa');
  });

  // Neg_Fun_0010 - Numeric slang
  test('Neg_Fun_0010: Handle numeric slang with Singlish input', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('mage 4n eka kadilaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBe('mage 4n eka kadilaa');
  });

  

});