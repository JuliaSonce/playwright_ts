import { test, expect, type Page } from '@playwright/test';
import { SignUp } from '../app/Pages/signup.page'

const user = {
    name: "Test",
    lastName: "Testowich",
    email: "TestTestowichyou@gmail.com",
    password: "TestTest123!",

}




test.describe('Test Sing up form ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qauto2.forstudy.space/https://qauto2.forstudy.space/');
    });


});

