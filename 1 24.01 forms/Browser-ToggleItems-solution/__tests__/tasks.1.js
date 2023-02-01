const puppeteer = require("puppeteer");
const path = require('path');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Bootstrap CDN', () => {
    it("Bootstrap should be used", async () => {
        const bootstrap = await page.$('link[href*="bootstrap"]');
        expect(bootstrap).toBeTruthy()
    });
});


describe('Hide destinations', () => {
    it("When button is clicked destinations should be alternately hidden and revealed", async () => {
        const button = await page.$('button');
        const listIsHidden = await page.$eval('.list-group', el => el.offsetParent === null)
        await button.click();
        const listIsHiddenAfterClick = await page.$eval('.list-group', el => el.offsetParent === null)
        if(listIsHidden) {
            expect(listIsHiddenAfterClick).toBe(false)
        } else {
            expect(listIsHiddenAfterClick).toBeTruthy()
        }
    });
});