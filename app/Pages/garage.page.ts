import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";


export class GaragePage extends AppPage {
    public pagePath = 'https://qauto2.forstudy.space/panel/garage'


    private logOutButton = this.page.locator('.d-flex.flex-column.sidebar > .btn.btn-link.btn-sidebar.sidebar_btn.text-danger', { hasText: 'Log out ' })
    private addedCarModal = this.page.locator('.modal-content');
    private addCarrBtn = this.page.getByRole('button', { name: 'Add car' });
    private brandDropdownField = this.page.locator('select#addCarBrand');
    private modelDropdownField = this.page.locator('select#addCarModel');
    private mileageInputField = this.page.locator('input#addCarMileage');
    private addBtn = this.page.getByRole('button', { name: 'Add' });
    private carCards = this.page.locator('ul.car-list > li').first();


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
    async validationOfAddedCar(car: { brand: string }) {
        await expect(this.carCards).toContainText(car.brand)

    }


}