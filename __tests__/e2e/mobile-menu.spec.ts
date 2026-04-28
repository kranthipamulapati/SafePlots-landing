import { test, expect } from '@playwright/test';

test.describe('Mobile navigation', () => {
    test.beforeEach(async ({ page }) => {
        // Hamburger + stacked header only appear under the site’s mobile breakpoint.
        await page.setViewportSize({ width: 375, height: 800 });
    });

    test('toggle opens menu; nested link navigates and closes menu', async ({ page }) => {
        await page.goto('/');
        const header = page.locator('header.header');
        const toggle = page.locator('.mobile-toggle');

        await expect(header).not.toHaveClass(/active/);
        await toggle.click();
        await expect(header).toHaveClass(/active/);
        await expect(toggle).toHaveText('✕');

        await page.locator('.dropdown-trigger').click();
        await page.locator('header .dropdown-menu a[href="/about"]').click();

        await expect(page).toHaveURL(/\/about\/?$/);
        await expect(header).not.toHaveClass(/active/);
    });
});
