const puppeteer = require("puppeteer");
const path = require('path');
const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
}

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Browser-DOM-querying', () => {
    it("Page Shouldn't contain a CSS Stylesheet", async () => {
        const stylesheets = await page.$$('link[rel="stylesheet"]');
        expect(stylesheets.length).toBe(0);
    });
    it("Element with class '.title' should be centered", async () => {
        const title = await page.$eval('.title', el => getComputedStyle(el).textAlign);
        expect(title).toBe('center');
    });
    it("Elements with class '.category' should have custom font size", async () => {
        const fontStyle = await page.$eval('.category', el => getComputedStyle(el).fontStyle);
        expect(fontStyle).not.toBe('normal');
    });
    it("Element with ID '#warning' should have custom font size", async () => {
        const fontSize = await page.$eval('#warning', el => getComputedStyle(el).fontSize);
        expect(fontSize).not.toBe('18.72px');
    });
    it("`colorGenerator()` fuction should exist", async () => {
        const colorGenerator = await page.evaluate(() => typeof colorGenerator);
        expect(colorGenerator).toBe('function');
    });
    it("Elements with class `.food-category` should each have unique background color", async () => {
        const foodCategory = await page.$$eval('.food-category', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('background-color')));
        const hasDuplicates = foodCategory.some((item, index) => foodCategory.indexOf(item) !== index);
        expect(hasDuplicates).toBeFalsy();
    });
    it("Each even element with class `.allergy-info` should have unique background color", async () => {
        const evenAllergyItems = await page.$$eval('.allergy-info:nth-child(even)', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('background-color')));
        const oddAllergyItems = await page.$$eval('.allergy-info:nth-child(odd)', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('background-color')));
        expect(evenAllergyItems).not.toEqual(oddAllergyItems);
    });
    it("Elements with class `.allergy-warning` should be layed out as column and centered", async () => {
        const display = await page.$eval('.allergy-warning', el => getComputedStyle(el).display);
        expect(display).toBe('flex');
        const flow = await page.$eval('.allergy-warning', el => getComputedStyle(el).flexFlow);
        expect(flow).toBe('column nowrap');
        const centered = await page.$eval('.allergy-warning', el => getComputedStyle(el).justifyContent);
        expect(centered).toBe('center');
    });
    it("Element with class `.footer` should appear as column for mobile and row for desktop", async () => {
        const display = await page.$eval('.footer', el => getComputedStyle(el).display);
        expect(display).toBe('flex');
        const flow = await page.$eval('.footer', el => getComputedStyle(el).flexFlow);
        expect(flow).toBe('row wrap');
    });
    it("Elements with class `.food-desc` should have rounded corners and have a custom border color", async () => {
        const rounded = await page.$eval('.food-desc', el => getComputedStyle(el).borderRadius);
        const roundedNum = parseFloat(rounded.replace('px', ''));
        expect(roundedNum).toBeGreaterThan(20);
        const borderColor = await page.$eval('.food-desc', el => getComputedStyle(el).borderColor);
        expect(borderColor).not.toBe('rgb(0, 0, 0)');
    });
});
