const timeout = 15000

describe('Nested button', () => {
  let page

  beforeEach(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('http://localhost:9000/')
  }, timeout)

  afterEach(async () => {
    page.close()
  })

  test('First click reveals a button', async () => {
    await (await page.waitForSelector('#outer-button')).click()

    const buttons = await page.$$('button')
    expect(buttons.length).toBe(5)
  }, timeout)

  test('Second click reveals a text', async () => {
    await (await page.waitForSelector('#outer-button')).click()
    await (await page.waitForSelector('#inner-button')).click()

    const html = await page.$eval('p', e => e.innerHTML)
    expect(html).toBe('Wow look at that frontend logic')
  }, timeout)
})