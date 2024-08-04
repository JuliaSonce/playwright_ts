import { test } from "../fixture/testGarage";
import { newUser } from '../data/models/user-data'

test.describe('Test Sing up', () => {
    test('Sign up form with correct data', async ({ app }) => {
        const randomUser = newUser()
        await app.signUp.open()
        await app.signUp.fillUserData(randomUser)
        await app.signUp.userIsRegistered()

    })
})