import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 30000,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 5000,
        ignoreHTTPSErrors: true,
        baseURL: process.env.BASE_URL,
        httpCredentials: {
            // @ts-ignore
            username: process.env.USER_NAME,
            // @ts-ignore
            password: process.env.PASSWORD,
        },
        projects: [
            {
                name: 'chromium',
                use: { browserName: 'chromium' },
            },
            // {
            //     name: 'firefox',
            //     use: { browserName: 'firefox' },
            // },
            // {
            //     name: 'webkit',
            //     use: { browserName: 'webkit' },
            // },
        ],
    };

    export default config;