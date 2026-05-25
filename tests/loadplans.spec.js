import { test, expect } from '@playwright/test';

test('my own manual', async ({ page }) => {
    const petTypeCmb = page.locator('[id="petType"]');
    const petAgeFld = page.locator('[id="petAge"]');
    const locationCmb = page.locator('[id="location"]');
    const showplansBtn = page.getByRole('button', { name: 'Show Plans' });


    await page.goto('https://purrfect-plan-finder-02708.vercel.app/');
    await showplansBtn.waitFor();
    await showplansBtn.click();
    await petTypeCmb.waitFor();
    await petTypeCmb.click();
    await page.getByRole('option', { name: 'Cat' }).click();
    await petAgeFld.waitFor();
    await petAgeFld.fill('10');
    await locationCmb.click();
    await page.getByRole('option', { name: 'Alberta' }).click();
    await showplansBtn.click();
    await page.pause();
});