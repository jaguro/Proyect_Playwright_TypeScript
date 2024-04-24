import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pom/login-app";

test.describe("LoginPage", () => {

    test("Test validate LoginPage successfully", async ({ page  }) => {
        const loginApp = new LoginPage(page);
        await loginApp.goto();
        await loginApp.login('standard_user','secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test("Test validate LoginPage Error", async ({ page  }) => {
        const loginApp = new LoginPage(page);
        await loginApp.goto()
        await loginApp.login('Incorrect_user','Incorrect123');

        const isErrorMessageVisible = await page.isVisible('.error-message-container.error');
        const errorMessageText = await page.textContent('.error-message-container.error h3[data-test="error"]');
        expect(isErrorMessageVisible).toBeTruthy();
        expect(errorMessageText).toContain('Epic sadface: Username and password do not match any user in this service');
    })

})

