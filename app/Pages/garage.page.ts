import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";


export class GaragePage extends AppPage {
    public pagePath = 'https://qauto2.forstudy.space/panel/garage'


    private logOutButton = this.page.locator('.d-flex.flex-column.sidebar > .btn.btn-link.btn-sidebar.sidebar_btn.text-danger', { hasText: 'Log out ' })
    private carsCard = this.page.locator('car jumbotron');
    private addedCarModal = this.page.locator('.modal-content');
    private updatedMileage = this.page.locator('.update-mileage-form_input form-control ng-untouched ng-pristine ng-valid')
    private addCarrBtn = this.page.getByRole('button', { name: 'Add car' });
    private garagePanel = this.page.locator('panel - page_heading d - flex justify - content - between')
    private addCarModal = this.page.locator('.modal-content')
    private carCards = this.page.locator('app-car > .car.jumbotron')
    private alertPopUp = this.page.locator('.alert.alert-success')
    private registeredUserName = this.page.locator('.display-4.profile_name')

    async expectLoaded() {
        await expect(this.logOutButton).toBeVisible()
    }
    async clickAddCarrBtn() {
        await this.addCarrBtn.click();

    }


}