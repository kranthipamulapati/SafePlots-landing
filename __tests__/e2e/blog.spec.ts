import { test, expect } from '@playwright/test';

test.describe('Blog article viewer', () => {
    test('Read more reveals viewer and injects library content', async ({ page }) => {
        await page.goto('/blog/');

        const viewer = page.locator('#blog-article-viewer');
        await expect(viewer).toHaveClass(/hidden/);

        await page.locator('.blog-read-more[data-target="article-1"]').first().click();

        await expect(viewer).not.toHaveClass(/hidden/);
        await expect(page.locator('#viewer-display-area')).toContainText('Why NRI Plots are Easy Targets');
    });
});
