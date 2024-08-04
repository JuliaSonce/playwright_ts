import { expect } from '@playwright/test';
import { AppPage } from '../abstractClasses';
import { Header } from '../Components/header.component';
import { UserData } from '../../data/interfaces/user.i';


export class SignUp extends AppPage {
    private singUpBtn = this.page.locator('.btn.btn-primary.hero-descriptor_btn');

    async clickSignUpBtn() {
        try {
            await this.singUpBtn.click();
        } catch (error) {
            console.log('Error during click action:', error);
        }
    }


    public pagePath = '/';
    public header = new Header(this.page);

    private nameInput = this.page.locator('input#signupName');
    private lastNameInput = this.page.locator('input#signupLastName');
    private emailInput = this.page.locator('input#signupEmail');
    private passwordInput = this.page.locator('input#signupPassword');
    private repeatPasswordInput = this.page.locator('input#signupRepeatPassword')
    private registerBtn = this.page.locator('.modal-footer .btn-primary')
    private logOutButton = this.page.locator('.d-flex.flex-column.sidebar > .btn.btn-link.btn-sidebar.sidebar_btn.text-danger', { hasText: 'Log out ' })

    async expectLoaded(): Promise<void> {
        await expect(this.singUpBtn).toBeVisible()
        await this.clickSignUpBtn()
        await expect(this.nameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible()
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.repeatPasswordInput).toBeVisible()
    }

    async fillUserData(user: UserData) {

        await this.nameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.repeatPasswordInput.fill(user.password);
        await this.registerBtn.click()
    }

    async userIsRegistered() {
        await expect(this.page).toHaveURL('https://qauto2.forstudy.space/panel/garage');
        await expect(this.logOutButton).toBeVisible();


    }
}