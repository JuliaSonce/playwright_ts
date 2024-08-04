import { expect, Page } from '@playwright/test';
import { AppPage } from '../abstractClasses';

export class HomePage extends AppPage {
    public pagePath = '/'
    private singInBtn = this.page.locator('.btn.btn-outline-white.header_signin');


    async expectLoaded() {
        await expect(this.singInBtn).toBeVisible()

    }

    // async clickSignUpBtn() {
    //     try {
    //         await this.singUpBtn.click();
    //     } catch (error) {
    //         console.log('Error during click action:', error);
    //     }
    // }
    async clickSignInBtn() {
        try {
            await this.singInBtn.click();
        } catch (error) {
            console.log('Error during click action:', error);
        }
    }

}


