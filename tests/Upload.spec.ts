import { test, expect } from '@playwright/test';
test('Upload file', async ({ page }) => {


  await page.goto('https://office-dev.webledger.in/#/sign-in');
  await page.locator('input[name="email"]').fill('automationaccountwl@yopmail.com');
  await page.locator('input[name="password"]').fill('qwerty');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Check Automation' }).click();

  await page.getByRole('link', { name: 'Clients' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Import', exact: true }).click();
  await page.waitForTimeout(4000);
  await page.locator('input[name="file"]').setInputFiles('/Users/Destiny/Desktop/Udemy-Demo/Uploadfile/Client Import NEW-CA ROHAN (1).xlsx');
  await page.waitForTimeout(4000);

  await page.getByText('Import Please wait...').click();
  await page.waitForTimeout(4000);




})