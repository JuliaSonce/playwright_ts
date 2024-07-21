import { expect } from '@playwright/test';
import { AppPage } from '../abstractClasses';
import { Header } from '../Components/header.component';

export class SignUp extends AppPage {
    public pagePath = 'https://qauto2.forstudy.space/';
    public header = new Header(this.page);

    private nameInput = this.page.locator('#signupName');
    private lastNameInput = this.page.locator('input#signupLastName');
    private emailInput = this.page.locator('input#signupEmail');
    private passwordInput = this.page.locator('input#signupPassword');
    private repeatPasswordInput = this.page.locator('input#signupRepeatPassword')

    async expectLoaded(): Promise<void> {
        await expect(this.nameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible()
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.repeatPasswordInput).toBeVisible()
    }

    async fillUserData(user: { email: string, firstName: string, lastName: string, password: string }) {
        await this.expectLoaded()
        await this.nameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.repeatPasswordInput.fill(user.password);

    }
}