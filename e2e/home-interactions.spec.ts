import { expect, test } from '@playwright/test';

test.describe('Home — pricing toggle', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('defaults to monthly billing copy', async ({ page }) => {
        const period = page.locator('[data-price-period]').first();
        await expect(period).toContainText('/month');
        const monthlyBtn = page.locator('[data-pricing-toggle] [data-billing="monthly"]');
        await expect(monthlyBtn).toHaveAttribute('aria-pressed', 'true');
    });

    test('switching to yearly updates period and prices', async ({ page }) => {
        await page.locator('[data-pricing-toggle] [data-billing="yearly"]').click();
        const periods = page.locator('[data-price-period]');
        await expect(periods.first()).toContainText('/year');
        const firstPrice = page.locator('[data-price]').first();
        // Avoid locale-specific separators; DOM should reflect yearly dataset value.
        await expect(firstPrice).toHaveAttribute('data-yearly', '1999');
        await expect(firstPrice).not.toHaveText('199');
        const yearlyBtn = page.locator('[data-pricing-toggle] [data-billing="yearly"]');
        await expect(yearlyBtn).toHaveAttribute('aria-pressed', 'true');
    });
});

test.describe('Home — service quote prefills message', () => {
    test('clicking Get Quote sets textarea from data-service', async ({ page }) => {
        await page.goto('/');
        const fencingCta = page.locator('.service-cta[data-service="Fencing"]').first();
        await fencingCta.click();
        const message = page.locator('#contactForm textarea[name="message"]');
        await expect(message).toHaveValue(/quote for:\s*Fencing/i);
    });
});

test.describe('Home — contact form', () => {
    test('successful submit posts JSON to API (mocked)', async ({ page }) => {
        let postedBody: unknown;

        await page.route('**/api/collections/landing_contacts/records', async (route) => {
            if (route.request().method() === 'POST') {
                postedBody = route.request().postDataJSON();
                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({ id: 'test-record' }),
                });
            } else {
                await route.continue();
            }
        });

        await page.goto('/');
        await page.locator('#contactForm input[name="name"]').fill('Test User');
        await page.locator('#contactForm input[name="phone"]').fill('9999999999');
        await page.locator('#contactForm input[name="email"]').fill('test@example.com');
        await page.locator('#contactForm textarea[name="message"]').fill('Hello from e2e');

        await page.locator('#contactForm .form-submit').click();

        await expect(page.locator('#contactForm .form-status')).toContainText(/Sent!/i);
        expect(postedBody).toMatchObject({
            name: 'Test User',
            phone: '9999999999',
            email: 'test@example.com',
            message: 'Hello from e2e',
            source: 'landing',
        });
    });

    test('honeypot filled skips API and shows success', async ({ page }) => {
        let apiHit = false;
        await page.route('**/api/collections/landing_contacts/records', async (route) => {
            apiHit = true;
            await route.fulfill({ status: 200, body: '{}' });
        });

        await page.goto('/');
        await page.locator('#contactForm input[name="name"]').fill('Bot');
        await page.locator('#contactForm input[name="phone"]').fill('1111111111');
        // Honeypot field is hidden but present in DOM
        await page.locator('#contactForm input[name="company"]').fill('Evil Corp');

        await page.locator('#contactForm .form-submit').click();

        await expect(page.locator('#contactForm .form-status')).toContainText(/Thanks/i);
        expect(apiHit).toBe(false);
    });
});

test.describe('Home — hero headline rotation', () => {
    test('hero lines change after animation interval', async ({ page }) => {
        await page.goto('/');
        const line1 = page.locator('#dynamic-text-1');
        const initial = await line1.textContent();
        expect(initial).toContain('SAFEGUARD');

        await expect(async () => {
            const next = await line1.textContent();
            expect(next).not.toContain('SAFEGUARD');
        }).toPass({ timeout: 8000 });
    });
});
