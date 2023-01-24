const puppeteer = require('puppeteer');
const path = require('path');
const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
};

let browser;
let page;
beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.join(__dirname, '../index.html'));

}, 30000);

afterAll(async () => {
    await browser.close();
});

describe('Hover', () => {
    test('Menu items should have `deepskyblue` background on hover', async () => {
        const element = await page.$('aside li:nth-child(2)');
        const elementBgColor = await page.evaluate(el => getComputedStyle(el).getPropertyValue('background-color'), element);
        await element.hover();
        await new Promise(r => setTimeout(r, 1000))
        const elementBgColorHover = await page.evaluate(el => getComputedStyle(el).getPropertyValue('background-color'), element);
        expect(elementBgColorHover).not.toBe(elementBgColor);
        expect(elementBgColorHover).toBe('rgb(0, 191, 255)');
    });
});
describe('Click', () => {
    test('Menu items should have `red` background when clicked', async () => {
        const element = await page.$('aside li:nth-child(2)');
        const elementBgColor = await page.evaluate(el => getComputedStyle(el).getPropertyValue('background-color'), element);
        await element.click();
        await page.hover('aside li:nth-child(3)')
        await new Promise(r => setTimeout(r, 1000))
        const elementBgColorClick = await page.evaluate(el => getComputedStyle(el).getPropertyValue('background-color'), element);
        expect(elementBgColorClick).not.toBe(elementBgColor);
        expect(elementBgColorClick).toBe('rgb(255, 0, 0)');
    });
    test('Page switches to correct content when menu items are clicked', async () => {
        const section = await page.$('main section:nth-child(4)')
        const pageOpacity = await page.evaluate(el => getComputedStyle(el).opacity, section)
        await page.click('aside li:nth-child(3)')
        await new Promise(r => setTimeout(r, 1000))
        const pageActiveOpacity =await page.evaluate(el => getComputedStyle(el).opacity, section)
        expect(pageActiveOpacity).not.toBe(pageOpacity)
        expect(parseInt(pageActiveOpacity)).toBeGreaterThan(0)
    });
});
