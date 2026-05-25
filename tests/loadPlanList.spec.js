import { test, expect } from '@playwright/test';
import { FindPlan } from '../page-object/FindPlan'

test('to test page-object', async ({ page }) => {
    const findPlan = new FindPlan(page);

    await findPlan.navigate();
    await findPlan.fillPlanForm();
});