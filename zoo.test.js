import { test, expect } from "@playwright/test"
// Test to navigate to the Edinburgh Zoo Tiger Cam page and verify its accessibility and content

const VIDEO_HOLDER_TIMEOUT = 5000; // Timeout in ms for .video-holder visibility (configurable)

test('Navigate to Edinburgh Zoo Tiger Cam', async ({ browser }) => {
  // Creating an Incognito Browser Context
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to the tiger cam page
  await page.goto('https://www.edinburghzoo.org.uk/animals/webcams/tiger-cam');
 
  // If the cookie modal is visible, click Accept
  const modal = page.locator('#udc-holder-modal');
  if (await modal.count() > 0 && await modal.isVisible()) {
    const acceptButton = modal.locator('button:has-text("Accept")');
    await acceptButton.waitFor({ state: 'attached' });
    await acceptButton.click();
  }
  // Verify the URL is correct
  await expect(page).toHaveURL('https://www.edinburghzoo.org.uk/animals/webcams/tiger-cam');
  // Verify the page title is correct
  await expect(page).toHaveTitle('Watch the Tigers live! | Edinburgh Zoo');

  await expect(page.locator('.video-holder')).toBeVisible({ timeout: VIDEO_HOLDER_TIMEOUT });
  await expect(page.locator('.video-holder')).toBeVisible({ timeout: 5000 });

  // Close the incognito context
  await context.close();
});