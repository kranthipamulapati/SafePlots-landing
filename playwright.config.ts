/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

/**
 * E2E tests run against a production-like static build via `astro preview`.
 * Locally, set reuseExistingServer to speed up iteration when preview is already running.
 */
export default defineConfig({
    testDir: './e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
    timeout: 30_000,
    use: {
        baseURL: 'http://127.0.0.1:4321',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    webServer: {
        command: 'npm run build && npx astro preview --host 127.0.0.1 --port 4321',
        url: 'http://127.0.0.1:4321',
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
        stdout: 'pipe',
        stderr: 'pipe',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        // Re-run interaction specs on a real mobile profile (nav hidden until menu opens).
        {
            name: 'mobile-chromium',
            use: { ...devices['Pixel 7'] },
        },
    ],
});
