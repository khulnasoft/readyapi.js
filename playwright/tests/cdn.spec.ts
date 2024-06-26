import { expect, test } from '@playwright/test'

const HOST = process.env.HOST || 'localhost'

test('Renders readyapi/galaxy api reference from the live CDN', async ({
  page,
  isMobile,
}) => {
  await page.goto(`http://${HOST}:3173/live`)

  // Check for basic elements on the page
  // The heading
  await expect(
    page.getByRole('heading', { name: 'Readyapi Galaxy' }),
  ).toBeVisible()
  // Body Text
  await expect(page.getByText('The Readyapi Galaxy')).toBeVisible()
  // http client
  await expect(page.getByText('Client Libraries')).toBeVisible()

  // Check for elements that are only visible on desktop
  if (!isMobile) {
    // Sidebar
    await expect(
      page.getByRole('link', { name: 'PLANETS', exact: true }),
    ).toBeVisible()
  }

  // TODO: fix the dev workflow
  /** Visual Regression Testing
   * use Playwright built in screenshot functionality https://playwright.dev/docs/screenshots
   * Playwright uses pixelmatch to compare screenshots
   * update screenshots with npx playwright test --update-snapshots
   */
  await expect(page).toHaveScreenshot('cdn-snapshot.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.02,
  })

  /** Capture into buffer
   * If we are unsatisfied with the built in visual regression testing
   * this is how we could pass it to a third party pixel diff facility eg. Chromatic
   *   const buffer = await page.screenshot()
   *   console.log(buffer.toString('base64'))
   */
})
