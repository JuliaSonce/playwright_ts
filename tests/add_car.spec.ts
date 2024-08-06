
import { test } from "../fixture/testGarage";
import { DefaultUser } from "../data/enum/defaultUser"
import { DefaultCar } from "../data/enum/defaultCar"


test.describe('Validate function of adding new car', () => {
    test('Add new car', async ({ app: { homePage, signIn, garagePage } }) => {
        const defaultUser = DefaultUser
        const defaultCar = DefaultCar

        await homePage.open()
        await homePage.clickSignInBtn()
        await signIn.expectLoaded()
        await signIn.signIn({ email: DefaultUser.email, password: DefaultUser.password })
        await garagePage.expectLoaded()
        await garagePage.clickAddCarrBtn()
        await garagePage.addCarFormIsVisible()
        await garagePage.addCar({ brand: DefaultCar.brand, model: DefaultCar.model })
        await garagePage.validationOfAddedCar({ brand: DefaultCar.brand })




    });
});
