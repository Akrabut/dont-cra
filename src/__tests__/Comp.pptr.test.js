const timeout = 15000

describe('Simple buttons', () => {
  let page

  beforeEach(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('http://localhost:9000/')
  }, timeout)

  afterEach(async () => {
    page.close()
  })

  test('First button works properly', async () => {
    await (await page.waitForSelector('#comp1')).click()

    const html = await page.$eval('p', e => e.innerHTML)
    expect(html).toBe('Wow comp1, that text really is awesome!')
  }, timeout)

  test('Comp1 text is not revealed unless button is clicked', async () => {
    await page.waitForSelector('#comp1')

    const paragraph = !!(await page.$('p'))
    expect(paragraph).toBe(false)
  }, timeout)

  test('Third button works properly too', async () => {
    await (await page.waitForSelector('#comp39')).click()

    const html = await page.$eval('p', e => e.innerHTML)
    expect(html).toBe('Wow comp39, that text really is awesome!')
  }, timeout)
})