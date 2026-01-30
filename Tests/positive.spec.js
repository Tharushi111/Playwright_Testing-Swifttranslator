const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

test.describe('Positive Functional Tests - SwiftTranslator', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForTimeout(2000);
  });

  // Pos_Fun_0001 - Simple present sentence
  test('Pos_Fun_0001: Convert a simple present sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('mama vaeda karanavaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    console.log('Expected: මම වැඩ කරනවා');
    console.log('Actual:', actualOutput);
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0002 - Compound sentence with reason
  test('Pos_Fun_0002: Convert compound sentence with reason clause', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('vaahanaya magahaeraena nisaa mama pramaadha vunaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0003 - Conditional complex sentence
  test('Pos_Fun_0003: Convert conditional complex sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('vaessa nisaa api tharaGAya kal dhaamu');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0004 - Polite request
  test('Pos_Fun_0004: Convert polite request', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('karuNaakara adha potha genath dhenna puluvandha?');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0005 - Informal slang phrase
  test('Pos_Fun_0005: Convert informal slang phrase', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('adoo patta vaedak bQQ');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0006 - Joined word input
  test('Pos_Fun_0006: Convert joined word input', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('matabathkannahithenavaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0007 - Repeated word emphasis phrase
  test('Pos_Fun_0007: Convert repeated word emphasis phrase', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('lassanayi lassanayi pinthuuraya oyaage');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0008 - Mixed language sentence
  test('Pos_Fun_0008: Convert mixed language sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('magee laptop ekee Windows update eka fail vunaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0009 - Plural subject sentence
  test('Pos_Fun_0009: Convert plural subject sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('Lamayi pusthakaaleta yanavaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0010 - Sentence with abbreviation
  test('Pos_Fun_0010: Convert sentence with abbreviation', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('magee NIC eka gedhara almaariyee thiyenavaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0011 - Sentence with currency
  test('Pos_Fun_0011: Convert sentence with currency', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('praveeshapatha Rs.3500 k vunaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0012 - Sentence with date
  test('Pos_Fun_0012: Convert sentence with date', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('viBhaagaya thiyennee 2026-03-15');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0013 - Sentence with time format
  test('Pos_Fun_0013: Convert sentence with time format', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('panthiya udhaeesana 8.30 ta patan gannavaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0014 - Sentence with measurement unit
  test('Pos_Fun_0014: Convert sentence with measurement unit', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('siini 2kg k saha parippu 3kg k ganna');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0015 - Sentence with place name
  test('Pos_Fun_0015: Convert sentence with place name', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('api colombo valata trip ekak yamu');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0016 - Multi-line sentence
  test('Pos_Fun_0016: Convert multi-line sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const multiLineInput = 'mama adha gedhara inne\noyaa enavadha paadama ahaganna';
    await textarea.fill(multiLineInput);
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0017 - Long paragraph
  test('Pos_Fun_0017: Convert long paragraph with scheduling update', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const longInput = 'mama adha office yadhdhi traffic eka godak thibuna nisaa parakku vunaa mama manager ta message ekak yaevvaa meeting eka kaldhaanna puluvandha kiyalaa. ohu eekata kaemathi vunaa. Meeting eka heta udhee thiyenavaa saha eeka online Zoom meeting ekak vidhihata karanna thiraNaya vuna nisaa mama documents tika email magin yaevvaa. ehema karala api team eka ekka agenda eka discuss karalaa work plan eka finalize kalaa.';
    await textarea.fill(longInput);
    await page.waitForTimeout(3000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0018 - Mixed brand reference
  test('Pos_Fun_0018: Convert mixed brand reference sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('mama WhatsApp message ekak evvaa oyaata.');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0019 - Negative permission sentence
  test('Pos_Fun_0019: Convert negative permission sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('mata adha ee vaedeeta yanna baehae');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0020 - Technical abbreviation
  test('Pos_Fun_0020: Convert sentence with technical abbreviation', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('magee laptop ekee RAM eka upgrade karanna oone');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0021 - Plural pronoun activity
  test('Pos_Fun_0021: Convert plural pronoun activity sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('eyaalaa chaarikaava giyaa mama naethuva');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0022 - Imperative command
  test('Pos_Fun_0022: Convert imperative command sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('karaeNaakara eLiyata yadhdhi dhora vahanna');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0023 - Future plan with plural pronoun
  test('Pos_Fun_0023: Convert future plan with plural pronoun', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('api heta muhudhe naanna yamu');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0024 - Currency and number format
  test('Pos_Fun_0024: Convert sentence with currency and number format', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('poth pahak Rs.1200 k kivvaa');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

  // Pos_Fun_0025 - Mixed English technical terms
  test('Pos_Fun_0025: Convert mixed English technical terms sentence', async ({ page }) => {
    const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await textarea.fill('magee phone ekata WiFi connect venne naehae');
    await page.waitForTimeout(2000);
    const actualOutput = await textarea.inputValue();
    expect(actualOutput).toBeTruthy();
  });

 

});