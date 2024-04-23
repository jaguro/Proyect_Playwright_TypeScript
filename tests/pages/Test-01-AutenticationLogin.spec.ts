import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/login-app";


test("LoginPage", async ({ page  }) => {
    const loginApp = new LoginPage(page);
    await loginApp.goto();
    await loginApp.login('standard_user','secret_sauce');
})
