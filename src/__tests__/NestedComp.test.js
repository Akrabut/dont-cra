const puppeteer = require('puppeteer')

describe('Nested button', () => {
  test('First click reveals a button', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:9000/')

    await (await page.waitForSelector('#outer-button')).click()

    const buttons = await page.$$('button')
    expect(buttons.length).toBe(5)

    browser.close()
  }, 16000)

  test('Second click reveals a text', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:9000/')

    await (await page.waitForSelector('#outer-button')).click()
    await (await page.waitForSelector('#inner-button')).click()

    const html = await page.$eval('p', e => e.innerHTML)
    expect(html).toBe('Wow look at that frontend logic')

    browser.close()
  }, 16000)
})