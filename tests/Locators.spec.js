import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {
    
    await page.goto("https://demoblaze.com/")

    //await page.locator('id=login2').click()
    await page.click('id=login2')
    await page.fill('#loginusername', 'Ananna')
    await page.fill("input[id='loginpassword']", 'test@123')
    await page.click("//button[normalize-space()='Log in']")
})