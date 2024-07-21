import { expect, Page } from '@playwright/test';
import { AppPage } from '../abstractClasses';

export class HomePage extends AppPage {
    public pagePath = 'https://qauto2.forstudy.space/https://qauto2.forstudy.space/'
    private singUpBtn = this.page.locator('.btn.btn-outline-white.header_signin');


    async expectLoaded() {
        await expect(this.singUpBtn).toBeVisible()

    }

}


