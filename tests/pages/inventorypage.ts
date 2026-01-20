import { expect, Locator, Page } from "@playwright/test";
export type cartdata={
    productName:string;
    productDescription:string;
    productPrice:string;
};
export class InventoryPage {
    page:Page;
    pageTitle:Locator;
    pageProducts:Locator;
    addToCartButton: Locator;
    productName:Locator;
    shoppingCart:Locator;
    constructor(page:Page) {
        this.page = page;
        this.pageTitle = this.page.locator('[class="app_logo"]');
        this.pageProducts = this.page.locator('[data-test="title"]');
        this.addToCartButton = this.page.locator('[id^="add-to-cart"]');
        this.productName = this.page.locator('[data-test^="inventory-item-name"]');
        this.shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
        }
public async assertInventoryPage(){
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.pageTitle).toHaveText('Swag Labs');
    await expect(this.pageProducts).toHaveText('Products');
    await expect(this.addToCartButton.nth(0)).toBeVisible();
}
public async goToCartPage(){
    await this.shoppingCart.click();
}
public async addToCartByProductsNumber(numberofproducts:number){
    const texts:string[] = [];
    let count = await this.addToCartButton.count();
    const cartdatas:cartdata[]=[]; 
    for(let i=0; i<numberofproducts&&i<count; i++){
        const button = this.addToCartButton.nth(0);
        // Scroll to center the element in viewport for better interaction
        await button.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(200); // Wait for scroll
        // Ensure element is in the viewport and clickable
        await button.waitFor({ state: 'attached', timeout: 10000 });
        await expect(button).toBeInViewport();
        await button.click();
        let productTitle:any = await this.productName.nth(i).textContent();
        let productDetails:any = await this.page.locator(`[data-test="inventory-item-description-${i}"]`).textContent();
        let productPrice:any = await this.page.locator(`[data-test="inventory-item-price-${i}"]`).textContent();
        const cartitem:cartdata={
            productName: productTitle,
            productDescription: productDetails,
            productPrice: productPrice
        };
        cartdatas.push(cartitem);
    }
    return cartdatas;
}

public async addToCartByProductName(productNames: string[]){
    const texts:string[] = [];
    for(const productName of productNames){
        // Find product by name using getByText
        const productLocator = this.page.getByText(productName).first();
        await productLocator.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(200);
        
        // Find the corresponding add to cart button for this product
        const container = this.page.locator('[data-test="inventory-item"]').filter({ has: productLocator });
        const addButton = container.locator('[id^="add-to-cart"]').first();
        
        await addButton.waitFor({ state: 'attached', timeout: 10000 });
        await expect(addButton).toBeInViewport();
        await addButton.click();
        texts.push(productName);
    }
    return texts;
}
}
