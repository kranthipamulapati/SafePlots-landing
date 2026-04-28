import { test, expect } from '@playwright/test';

/**
 * Header primary nav is hidden on small viewports until the hamburger opens.
 * Dropdown menus use :hover on desktop. Force a wide viewport for these checks
 * so both `chromium` and `mobile-chromium` projects behave the same.
 */
test.describe('Navigation (desktop header layout)', () => {
    test.use({ viewport: { width: 1440, height: 900 } });

    test.describe('Header & footer links (home)', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('/');
        });

        test('logo points to home', async ({ page }) => {
            await expect(page.locator('header .logo')).toHaveAttribute('href', '/');
        });

        test('primary nav uses in-page anchors on home', async ({ page }) => {
            await expect(page.locator('header a[href="/#how-it-works"]')).toBeVisible();
            await expect(page.locator('header a[href="/#plans"]')).toBeVisible();
            await expect(page.locator('header a[href="/#contact"]')).toBeVisible();
        });

        test('Company dropdown exposes About / Blog / FAQ', async ({ page }) => {
            await page.locator('.nav-item.has-dropdown').hover();
            await expect(
                page.locator('header .dropdown-menu a[href="/about"]'),
            ).toBeVisible();
            await expect(
                page.locator('header .dropdown-menu a[href="/blog"]'),
            ).toBeVisible();
            await expect(
                page.locator('header .dropdown-menu a[href="/faq"]'),
            ).toBeVisible();
        });

        test('Login CTA targets app with safe rel', async ({ page }) => {
            const login = page.locator('.header-actions .btn-black');
            await expect(login).toHaveAttribute('href', 'https://web.safeplots.com');
            await expect(login).toHaveAttribute('target', '_blank');
            const rel = await login.getAttribute('rel');
            expect(rel).toMatch(/noopener/);
        });

        test('footer legal and sitemap links', async ({ page }) => {
            await expect(page.locator('footer a[href="/cookie-policy"]')).toBeVisible();
            await expect(page.locator('footer a[href="/accessibility"]')).toBeVisible();
            await expect(page.locator('footer a[href="/security"]')).toBeVisible();
            await expect(page.locator('footer a[href="/status"]')).toBeVisible();
            await expect(page.locator('footer a[href="/sitemap.xml"]')).toBeVisible();
            await expect(page.locator('footer a[href="/terms"]')).toBeVisible();
            await expect(page.locator('footer a[href="/privacy"]')).toBeVisible();
            await expect(page.locator('footer a[href="/refund-policy"]')).toBeVisible();
        });

        test('footer contact links', async ({ page }) => {
            await expect(
                page.locator('.footer-contact-list a[href^="tel:"]').first(),
            ).toHaveAttribute('href', 'tel:+917780391340');
            await expect(
                page.locator('.footer-contact-list a[href^="mailto:"]').first(),
            ).toHaveAttribute('href', 'mailto:admin@safeplots.com');
        });
    });

    test.describe('Inward navigation from inner page', () => {
        test('header section links from /about/ point to home with hash', async ({
            page,
        }) => {
            await page.goto('/about/');
            await expect(page.locator('header a[href="/#how-it-works"]')).toBeVisible();
            await expect(page.locator('header a[href="/#plans"]')).toBeVisible();
        });
    });
});
