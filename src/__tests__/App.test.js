const puppeteer = require('puppeteer')

describe('Main container', () => {
  test('h1 loads correctly', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:9000/')
    await page.waitForSelector('h1')

    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toBe('Hi')

    browser.close()
  }, 16000)

  test('There are four buttons', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:9000/')
    await page.waitForSelector('h1')

    const buttons = await page.$$('button')
    expect(buttons.length).toBe(4)

    browser.close()
  }, 16000)
})