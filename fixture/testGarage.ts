import { App } from "../app";

import { test as pwTest } from "@playwright/test";

export const test = pwTest.extend<
    { app: App }
>({
    app: async ({ page }, use) => {
        const app = new App(page)
        await use(app)
    }
})