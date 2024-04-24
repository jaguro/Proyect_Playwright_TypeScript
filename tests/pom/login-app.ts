import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly pass: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        this.pass = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }
    // function to login app
    async login(userName: string, pass: string): Promise<void> {
        await this.userName.fill(userName);
        await this.pass.fill(pass);
        await this.loginButton.click();
    }
    // function to goto url web
    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }
}