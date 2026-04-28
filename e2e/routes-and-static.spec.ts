import { expect, test } from '@playwright/test';
import { PAGE_PATHS } from './fixtures';

test.describe('HTTP routes', () => {
    for (const path of PAGE_PATHS) {
        test(`${path} returns 200`, async ({ request }) => {
            const res = await request.get(path);
            expect(res.ok(), `Expected 200 for ${path}, got ${res.status()}`).toBeTruthy();
        });
    }

    test('/404.html returns 200 (custom 404 page)', async ({ request }) => {
        const res = await request.get('/404.html');
        expect(res.ok()).toBeTruthy();
    });
});

test.describe('Static & SEO files', () => {
    test('robots.txt references sitemap', async ({ request }) => {
        const res = await request.get('/robots.txt');
        expect(res.ok()).toBeTruthy();
        const text = await res.text();
        expect(text).toContain('Sitemap:');
        expect(text).toContain('https://safeplots.com/sitemap.xml');
    });

    test('sitemap.xml lists core URLs', async ({ request }) => {
        const res = await request.get('/sitemap.xml');
        expect(res.ok()).toBeTruthy();
        const xml = await res.text();
        expect(xml).toContain('<loc>https://safeplots.com/</loc>');
        expect(xml).toContain('<loc>https://safeplots.com/about/</loc>');
        expect(xml).toContain('<loc>https://safeplots.com/blog/</loc>');
    });

    test('.well-known/security.txt is served', async ({ request }) => {
        const res = await request.get('/.well-known/security.txt');
        expect(res.ok()).toBeTruthy();
        const text = await res.text();
        expect(text).toMatch(/Contact:\s*mailto:admin@safeplots\.com/i);
    });
});

test.describe('Homepage head', () => {
    test('index has canonical and primary meta', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
            'href',
            'https://safeplots.com/',
        );
        await expect(page).toHaveTitle(/SafePlots.*NRI Plot Monitoring/i);
        const desc = page.locator('meta[name="description"]');
        await expect(desc).toHaveAttribute('content', /Trusted NRI plot management/i);
    });

    test('404 page is noindex', async ({ page }) => {
        await page.goto('/404.html');
        await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
            'content',
            /noindex/i,
        );
    });
});
