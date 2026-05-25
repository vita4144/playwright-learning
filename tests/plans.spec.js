import { test, expect } from '@playwright/test';

test('auto-generated', async ({ page }) => {
    await page.goto('https://purrfect-plan-finder-02708.vercel.app/');
    await page.getByRole('combobox', { name: 'Pet Type' }).click();
    await page.getByRole('option', { name: 'Cat' }).click();
    await page.getByRole('spinbutton', { name: 'Pet Age (years)' }).click();
    await page.getByRole('spinbutton', { name: 'Pet Age (years)' }).fill('10');
    await page.getByRole('combobox', { name: 'Location' }).click();
    await page.getByRole('option', { name: 'Alberta' }).click();
    await page.getByRole('button', { name: 'Show Plans' }).click();
    await page.getByRole('checkbox').first().click();
    await page.waitForTimeout(5000);
});