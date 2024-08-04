// import { FullConfig } from '@playwright/test';

// async function globalSetup(config: FullConfig) {
//     // Setup logic here
// }

// export default globalSetup;
async function globalSetup() {
    console.log("Global setup")
    console.log("Finish setup")
}

export default globalSetup;