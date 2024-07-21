import exp from "constants";
import { Component } from "../abstractClasses";
import { expect } from "@playwright/test";

export class Header extends Component {
    public homeBtn = this.page.locator('.btn header-link -active', { hasText: 'Home' });
    public aboutBtn = this.page.locator('btn header-link -active', { hasText: 'About' });
    public contactsBtn = this.page.locator('btn header-link -active', { hasText: 'Contacts' });
    public guestLoginBtn = this.page.locator('btn header-link -active', { hasText: 'Guest log in' });
    public signInBtn = this.page.locator('btn header-link -active', { hasText: 'Sign In' });

    async expectLoaded() {
        await expect(this.homeBtn).toBeVisible();
        await expect(this.aboutBtn).toBeVisible();
        await expect(this.contactsBtn).toBeVisible();
        await expect(this.guestLoginBtn).toBeVisible();
        await expect(this.signInBtn).toBeVisible();
    }




}