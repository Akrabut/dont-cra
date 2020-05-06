import regeneratorRuntime from "regenerator-runtime"
const puppeteer = require('puppeteer')

describe('Simple buttons', () => {
  test('First button works properly', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:9000/')
    
    await (await page.waitForSelector('#comp1')).click()

    const html = await page.$eval('p', e => e.innerHTML)
    expect(html).toBe('Wow comp1, that text really is awesome!')

    browser.close()
  }, 16000)

  test('Comp1 text is not revealed unless button is clicked', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:9000/')

    await page.waitForSelector('#comp1')

    const paragraph = document.querySelector('p')
    expect(paragraph).toBe(null)

    browser.close()
  }, 16000)

  test('Third button works properly too', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:9000/')

    await (await page.waitForSelector('#comp39')).click()

    const html = await page.$eval('p', e => e.innerHTML)
    expect(html).toBe('Wow comp39, that text really is awesome!')

    browser.close()
  }, 16000)
})