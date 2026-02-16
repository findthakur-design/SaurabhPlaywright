import {Page, Route} from "@playwright/test";
export class NetworkPage {
    page:Page;
    constructor(page:Page) {
        this.page = page;
    }
    public async routeInventory() {
        await this.page.route('**/inventory**', async (route: Route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                "data": [
                    { "id": "sauce-labs-backpack", "name": "Sauce Labs Backpack", "description": "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.", "price": 29.99, "image": "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg" },
                    { "id": "sauce-labs-bike-light", "name": "Sauce Labs Bike Light", "description": "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.", "price": 9.99, "image": "https://www.saucedemo.com/static/media/sauce-bike-light-1200x1500.a0c9caae.jpg" },
                    { "id": "sauce-labs-bolt-t-shirt", "name": "Sauce Labs Bolt T-Shirt", "description": "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.", "price": 15.99, "image": "https://www.saucedemo.com/static/media/sauce-bolt-shirt-1200x1500.jpeg" },
        ]})
    });
    })
}}
