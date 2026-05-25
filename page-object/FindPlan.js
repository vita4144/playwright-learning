export class FindPlan {
    constructor(page) {
        this.page = page;
        this.petTypeCmb = page.locator('[id="petType"]');
        this.petAgeFld = page.locator('[id="petAge"]');
        this.locationCmb = page.locator('[id="location"]');
        this.showplansBtn = page.getByRole('button', { name: 'Show Plans' });
    }
    async navigate() {
        await this.page.goto('https://purrfect-plan-finder-02708.vercel.app/');
    }

    async fillPlanForm() {
        // 1. Open the Pet Type combobox and select Cat
        await this.petTypeCmb.click();
        await this.page.getByRole('option', { name: 'Cat' }).click();

        // 2. Fill the age
        await this.petAgeFld.fill('10');

        // 3. Open the Location combobox and select Alberta
        await this.locationCmb.click();
        await this.page.getByRole('option', { name: 'Alberta' }).click();
    }
};