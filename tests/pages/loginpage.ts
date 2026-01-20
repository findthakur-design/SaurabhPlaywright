import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page:Page;
    username:Locator;
    password:Locator;
    loginButton:Locator;
    constructor(page:Page) {
        this.page = page;
        this.username = this.page.locator('[data-test="username"]')
        this.password = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[id="login-button"]');
    }
    public async launchUrl(url:string){
        await this.page.goto(url);
    }

    public async login(username:string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}