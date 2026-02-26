import { test, expect } from '@playwright/test';

test('verify homepage and navigation', async ({ page }) => {
  await page.goto('http://localhost:3005');

  // Click on "專案經歷" link in the first collapsible
  const firstTrigger = page.locator('button[type="button"]').first();
  await firstTrigger.click();

  const projectLink = page.getByRole('link', { name: '專案經歷' }).first();
  await projectLink.click();

  await page.waitForURL('**/projects');
  await page.waitForLoadState('networkidle');

  // Verify content
  const heading = await page.getByRole('heading', { name: '專案經歷' });
  await expect(heading).toBeVisible();

  const vandaTable = await page.getByText('凡達科技有限公司');
  await expect(vandaTable).toBeVisible();
});
