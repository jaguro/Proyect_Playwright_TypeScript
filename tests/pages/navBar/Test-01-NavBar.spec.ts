import {test, expect} from "@playwright/test";
import { NavBar } from "../../pom/navBar-app";
import { LoginPage } from "../../pom/login-app";


test.describe("NavBar", () => {

    test("Test validate logo", async ({page}) => {
        const navBar: NavBar = new NavBar(page);
        const loginApp = new LoginPage(page);
        await loginApp.goto();
        await loginApp.login('standard_user','secret_sauce');
        await expect(navBar.logoCentral).toBeVisible();
    })

    test("Test validate icon Menu", async ({page}) => {
        const loginApp = new LoginPage(page);
        await loginApp.goto();
        await loginApp.login('standard_user','secret_sauce');

    })

})