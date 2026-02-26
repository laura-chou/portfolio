import { test, expect } from '@playwright/test';

test('verify homepage and navigation to split project pages', async ({ page }) => {
  await page.goto('http://localhost:3005');

  // Open first collapsible and check Flytech link
  const firstTrigger = page.locator('button[type="button"]').nth(0);
  await firstTrigger.click();
  const flytechLink = page.getByRole('link', { name: '專案經歷' }).nth(0);
  await flytechLink.click();
  await page.waitForURL('**/projects/flytech');
  await expect(page.getByText('賽普勒斯商飛力通股份有限公司')).toBeVisible();

  // Go back
  await page.goto('http://localhost:3005');

  // Open second collapsible and check Vanda link
  const secondTrigger = page.locator('button[type="button"]').nth(1);
  await secondTrigger.click();
  const vandaLink = page.getByRole('link', { name: '專案經歷' }).nth(1);
  await vandaLink.click();
  await page.waitForURL('**/projects/vanda');
  await expect(page.getByText('凡達科技有限公司')).toBeVisible();

  // Go back
  await page.goto('http://localhost:3005');

  // Open third collapsible and check Creation link
  const thirdTrigger = page.locator('button[type="button"]').nth(2);
  await thirdTrigger.click();
  const creationLink = page.getByRole('link', { name: '專案經歷' }).nth(2);
  await creationLink.click();
  await page.waitForURL('**/projects/creation');
  await expect(page.getByText('創時億網路科技有限公司')).toBeVisible();
});
