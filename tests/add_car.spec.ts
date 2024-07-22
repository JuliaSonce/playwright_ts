import { expect, test } from '@playwright/test';
import { GaragePage } from '../app/Pages/garage.page';

const car = {
    brand: "BMW",
    model: "X5",
    mileage: "200"
}
test('Add new car', async ({ page }) => {
    let garagePage = new GaragePage(page);
    await garagePage.open(garagePage.pagePath)
    await garagePage.clickAddCarrBtn();
    // await expect(garagePage.addCarModal()).toBeVisible()// modal is visible on garage page
    // let addCarContainer = garagePage.addCarModal();
    // let addCar = new AddCar(page, addCarContainer)
    // await addCar.addCar(car)
    // await expect(garagePage.alertPopUp()).toBeVisible()

})
