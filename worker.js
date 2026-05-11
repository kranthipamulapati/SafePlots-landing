/** @format */

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Redirect www -> non-www
        if (url.hostname === "www.safeplots.com") {
            url.hostname = "safeplots.com";

            return Response.redirect(url.toString(), 301);
        }

        // Serve static assets
        return env.ASSETS.fetch(request);
    },
};
