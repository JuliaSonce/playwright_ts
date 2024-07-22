import { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
const envFile = `./env/.env.${process.env.ENV || 'local'}`;
const envConfig = dotenv.config({ path: envFile });
dotenvExpand.expand(envConfig);

console.log("\n\n==================================================================")
console.log(`Running tests with env: ${process.env.ENV} from file: ${envFile}`)
console.log(`Current  base URL: ${process.env.BASE_URL}`)
console.log("==================================================================\n\n")
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
    }
}
export default config;