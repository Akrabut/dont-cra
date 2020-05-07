const timeout = 15000

describe('Main container', () => {
  let page

  beforeEach(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('http://localhost:9000/')
  }, timeout)

  afterEach(async () => {
    page.close()
  })

  test('h1 loads correctly', async () => {
    await page.waitForSelector('h1')

    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toBe('Hi')
  }, timeout)

  test('There are four buttons', async () => {
    await page.waitForSelector('h1')

    const buttons = await page.$$('button')
    expect(buttons.length).toBe(4)
  }, timeout)
})