import { expect, Locator, Page } from "@playwright/test";
export class CartPage {
    page:Page;
    pageTitle:Locator;
    yourCart:Locator;
    removeButton: Locator;
    checkoutButton: Locator;
    continueShoppingButton: Locator;
    constructor(page:Page) {
        this.page = page;
        this.pageTitle = this.page.getByText('Swag Labs');
        this.yourCart = this.page.getByText('Your Cart');
        this.removeButton = this.page.locator('[id^="remove-sauce-labs"]');
        this.checkoutButton = this.page.locator('[id="checkout"]');
        this.continueShoppingButton = this.page.locator('[id="continue-shopping"]');
        }
    public async assertCartPage(){
        await expect(this.page).toHaveURL(/.*cart.html/);
        await expect(this.pageTitle).toBeVisible();
        await expect(this.yourCart).toBeVisible();
        await expect(this.removeButton.nth(0)).toBeVisible();
        await expect(this.checkoutButton).toBeVisible();
        await expect(this.continueShoppingButton).toBeVisible();
        }
    public async removeItemByProductsNumber(numberofproducts:number){
        const removeButton = this.removeButton.count();
        let count = await this.removeButton.count();
        for (let i = 0; i < numberofproducts && i < count; i++) {
            await this.removeButton.nth(0).click();
         }
    }
}