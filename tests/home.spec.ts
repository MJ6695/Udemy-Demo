import { test, expect } from "@playwright/test";
import exp from "constants";

test.describe('Home', () => {
    test('Open HomePage and Verify Title', async ({ page }) => {
        await page.goto('https://office-dev.webledger.in/#/sign-in')
        //Verify the title
        await expect(page).toHaveTitle('WebLedger Office');
    })
    
    test('Open HomePage and Verify URL', async ({ page }) => {
        await page.goto('https://in.jbl.com')
        //click on button
        await page.locator('#headphones').click()
        //Verify the URL
       // await expect(page). toHaveURL('https://in.jbl.com/headphones')
        await expect(page).toHaveURL(/.*headphones/)
    })
    
    test('Verify the Heading text using  Text Selector', async ({ page }) => {
        await page.goto('https://in.jbl.com')
        //Find ther Text locator
        const Headingtext = await page.locator('text=POPULar CATEGORIES')
        //Verify the Heading text visible , work when the unique text , double "" perfect check same to same 
        await expect(Headingtext).toBeVisible();
    })
    
    // test('Verify the link', async ({ page }) => {
    //     const expectedlink =["UsefulLinks", "QuickTutorial","Supports"];

    //     await page.goto('https://office-dev.webledger.in/#/sign-in')
        
    //     await page.locator('input[name="email"]').fill('default@example.com');
    //     await page.locator('input[name="password"]').fill('qwerty');
    //     await page.getByRole('button', { name: 'Sign In' }).click();
    //     await page.waitForTimeout(3000)
    //     const navlinks = page.locator('#menu-item')
    //     expect(await navlinks.allTextContents()).toEqual(expectedlink);
    // })

    
        test('Create the Business with validation messages', async ({ page }) => {
            await page.goto('https://office-dev.webledger.in/#/sign-in');
            await page.locator('input[name="email"]').fill('default@example.com');
            await page.locator('input[name="password"]').fill('qwerty');
            await page.getByRole('button', { name: 'Sign In' }).click();
            // await page.waitForTimeout(3000)
             await page.getByRole('link', { name: 'Create Company' }).click();
            // await page.getByPlaceholder('Name', { exact: true }).click();
            // const inputSelector = '[placeholder="Name"]';
            // const names = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Meet', 'Joshi', 'Meghal',  'John','Jane','Alice','Bob','Eva','David'];
            // const randomIndex = Math.floor(Math.random() * names.length);
            // const randomLastName = names[randomIndex];
            // await page.fill(inputSelector, randomLastName);
            await expect.soft(page.locator('text=Name is a required field')).toBeVisible()
            await page.getByRole('button', { name: 'Submit' }).click();  
            await page.waitForTimeout(3000)
            const validationmessages= page.locator('text=Name is a required field')
            await expect(validationmessages).toBeVisible();
    })

    // test('Check Lenth messages', async ({ page }) => {
    //     await page.goto('https://office-dev.webledger.in/#/sign-in');
    //     await page.locator('input[name="email"]').fill('default@example.com');
    //     await page.locator('input[name="password"]').fill('qwerty');
    //     await page.getByRole('button', { name: 'Sign In' }).click();
    //     await page.waitForTimeout(3000)
    //     await page.goto('https://office-dev.webledger.in/#/quick-tutorial')
    //     const post =page.locator('p[data-v-27a4a696=""]')
    //     for (const el of await post.elementHandle()) {
    //         expect(await el.allTextContents().length).toBeGreaterThan(10)
            
    //     }
    //     expect(post.count()).toEqual(5);
        
        // await page.getByPlaceholder('Name', { exact: true }).click();
        // const inputSelector = '[placeholder="Name"]';
        // const names = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Meet', 'Joshi', 'Meghal',  'John','Jane','Alice','Bob','Eva','David'];
        // const randomIndex = Math.floor(Math.random() * names.length);
        // const randomLastName = names[randomIndex];
        // await page.fill(inputSelector, randomLastName);
        // await page.waitForTimeout(3000)
        // const validationmessages= page.locator('text=Name is a required field')
        // await expect(validationmessages).toBeVisible();
//})


})

