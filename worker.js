/** @format */

const CANONICAL_HOST = "safeplots.com";

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const host = url.hostname.toLowerCase();

        if (host !== CANONICAL_HOST && host !== `www.${CANONICAL_HOST}`) {
            return env.ASSETS.fetch(request);
        }

        const needsRedirect =
            host !== CANONICAL_HOST || url.protocol !== "https:";

        if (needsRedirect) {
            const canonical = new URL(
                url.pathname + url.search,
                `https://${CANONICAL_HOST}`
            );
            return Response.redirect(canonical.href, 301);
        }

        return env.ASSETS.fetch(request);
    },
};
