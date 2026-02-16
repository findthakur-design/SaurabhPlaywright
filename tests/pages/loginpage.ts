import { request, Locator, Page } from "@playwright/test";
// import {request} from "@playwright/test";


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

    public async login(username1:string, password1:string){
        // let context = await request.newContext();
        // let response = await context.get('https://www.saucedemo.com/api/authenticate');
        // let formattedResponse = await response.json();
        // let username = formattedResponse.data.username;
        // let password = formattedResponse.data.password;
        await this.username.fill(username1);
        await this.password.fill(password1);
        await this.loginButton.click();
        await this.page.pause();
    }


}