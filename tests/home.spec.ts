import { test, expect } from "@playwright/test";

test.describe('Home', () => {
    test('Open HomePage and Verify Title', async ({ page }) => {
        await page.goto('https://office-dev.webledger.in/#/sign-in')
        //Verify the title
        await expect(page).toHaveTitle('WebLedger Office');
    })
    
    
})
