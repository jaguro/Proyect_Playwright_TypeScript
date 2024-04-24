import { type Locator, type Page } from "@playwright/test";

export class NavBar {

    readonly page: Page;
    readonly logoCentral: Locator;
    readonly iconMenu: Locator;
    readonly iconShopping: Locator;
    readonly dropDownOptions: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoCentral = page.locator('//div[@class=\'app_logo\']');
        this.iconMenu = page.locator('//button[@id=\'react-burger-menu-btn\']');
        this.iconShopping = page.locator('//a[@class=\'shopping_cart_link\']');
        this.dropDownOptions = page.locator('//select[@class=\'product_sort_container\']')
    }

    async dropDownIconMenu() {
        await this.iconMenu.click();
    }


}
