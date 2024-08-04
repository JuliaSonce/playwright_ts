import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";


export class GaragePage extends AppPage {
    public pagePath = 'https://qauto2.forstudy.space/panel/garage'


    private logOutButton = this.page.locator('.d-flex.flex-column.sidebar > .btn.btn-link.btn-sidebar.sidebar_btn.text-danger', { hasText: 'Log out ' })
    private addedCarModal = this.page.locator('.modal-content');
    private addCarrBtn = this.page.getByRole('button', { name: 'Add car' });
    private alertPopUp = this.page.locator('.alert.alert-success')
    private registeredUserName = this.page.locator('.display-4.profile_name')
    private brandDropdownField = this.page.locator('select#addCarBrand');
    private modelDropdownField = this.page.locator('select#addCarModel');
    private mileageInputField = this.page.locator('input#addCarMileage');
    private cancelBtn = this.page.locator('.btn.btn-secondary');
    private addBtn = this.page.getByRole('button', { name: 'Add' });
    private carCards = this.page.locator('app-car > .car.jumbotron');
    private carName = this.page.locator('.car_name.h2');
    private updatedMileage = this.page.locator('.ng-pristine.ng-untouched.ng-valid.update-mileage-form > input[name="miles"]')



    async expectLoaded() {
        await expect(this.logOutButton).toBeVisible()
    }
    async clickAddCarrBtn() {
        await this.addCarrBtn.click();

    }
    async addCarFormIsVisible() {
        await expect(this.addedCarModal).toBeVisible();

    }
    async addCar(car: { brand: string, model: string }) {
        await this.brandDropdownField.selectOption(car.brand)
        await this.modelDropdownField.selectOption(car.model);
        await this.mileageInputField.click()
        await this.mileageInputField.fill("1001");
        await this.addBtn.click({ force: true });
    }
    async successAlertIsVisible() {
        await expect(this.alertPopUp).toBeVisible();
    }
    async validationOfAddedCar(car: { brand: string }) {
        await expect(this.carCards).toBeVisible()
        await expect(this.carName).toHaveText(car.brand)
    }


}