import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { Header } from "../Components/header.component";

export class SignIn extends AppPage {
    public pagePath = '/'
    public header = new Header(this.page)


    private emailInputField = this.page.locator('#signinEmail');
    private passwordInputField = this.page.locator('#signinPassword')
    private loginBtn = this.page.locator('//button[text()="Login"]');




    async expectLoaded() {
        await expect(this.emailInputField).toBeVisible();
        await expect(this.passwordInputField).toBeVisible();
        await expect(this.loginBtn).toBeVisible();

    }
    async signIn(user: { email: string, password: string }) {
        await this.expectLoaded();
        await this.emailInputField.fill(user.email)
        await this.passwordInputField.fill(user.password);
        await this.loginBtn.click();
    }
}