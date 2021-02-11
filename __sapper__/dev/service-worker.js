(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1613014925008;

	const files = [
		"/service-worker-index.html",
		"/adgate.png",
		"/ayet.png",
		"/discord.png",
		"/embed_image.png",
		"/favicon.png",
		"/index.css",
		"/main_png_logo.png",
		"/tailwind.css",
		"/twitter.png",
		"/youtube.png"
	];

	const shell = [
		"/client/client.ae0f63ce.js",
		"/client/index.9b18d1c7.js",
		"/client/withdraw.64b21f35.js",
		"/client/Success.33e14b0a.js",
		"/client/Loader.f51771d3.js",
		"/client/discord.e58e465a.js",
		"/client/index.3c77d959.js",
		"/client/auth.esm.7a3eb8cb.js",
		"/client/register.af308d30.js",
		"/client/logout.a9065846.js",
		"/client/login.5d78c28d.js",
		"/client/index.efa17d44.js",
		"/client/offerwalls.b3d1f6dc.js",
		"/client/promocodes.d4e2e49d.js",
		"/client/giveaway.dbd2ce99.js",
		"/client/invite.978b2d4b.js",
		"/client/quests.f4b846ed.js",
		"/client/link.2ca90855.js",
		"/client/faq.7dc940c3.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});


	/**
	 * Fetch the asset from the network and store it in the cache. 
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
		const cache = await caches.open(`offline${timestamp}`);

		try {
			const response = await fetch(request);
			cache.put(request, response.clone());
			return response;
		} catch (err) {
			const response = await cache.match(request);
			if (response) return response;

			throw err;
		}
	}

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		const isHttp = url.protocol.startsWith('http');
		const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
		const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
		const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

		if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
			event.respondWith(
				(async () => {
					// always serve static files and bundler-generated assets from cache.
					// if your application has other URLs with data that will never change,
					// set this variable to true for them and they will only be fetched once.
					const cachedAsset = isStaticAsset && await caches.match(event.request);

					// for pages, you might want to serve a shell `service-worker-index.html` file,
					// which Sapper has generated for you. It's not right for every
					// app, but if it's right for yours then uncomment this section
					/*
					if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
						return caches.match('/service-worker-index.html');
					}
					*/

					return cachedAsset || fetchAndCache(event.request);
				})()
			);
		}
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYxMzAxNDkyNTAwODtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2FkZ2F0ZS5wbmdcIixcblx0XCIvYXlldC5wbmdcIixcblx0XCIvZGlzY29yZC5wbmdcIixcblx0XCIvZW1iZWRfaW1hZ2UucG5nXCIsXG5cdFwiL2Zhdmljb24ucG5nXCIsXG5cdFwiL2luZGV4LmNzc1wiLFxuXHRcIi9tYWluX3BuZ19sb2dvLnBuZ1wiLFxuXHRcIi90YWlsd2luZC5jc3NcIixcblx0XCIvdHdpdHRlci5wbmdcIixcblx0XCIveW91dHViZS5wbmdcIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcIi9jbGllbnQvY2xpZW50LmFlMGY2M2NlLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC45YjE4ZDFjNy5qc1wiLFxuXHRcIi9jbGllbnQvd2l0aGRyYXcuNjRiMjFmMzUuanNcIixcblx0XCIvY2xpZW50L1N1Y2Nlc3MuMzNlMTRiMGEuanNcIixcblx0XCIvY2xpZW50L0xvYWRlci5mNTE3NzFkMy5qc1wiLFxuXHRcIi9jbGllbnQvZGlzY29yZC5lNThlNDY1YS5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguM2M3N2Q5NTkuanNcIixcblx0XCIvY2xpZW50L2F1dGguZXNtLjdhM2ViOGNiLmpzXCIsXG5cdFwiL2NsaWVudC9yZWdpc3Rlci5hZjMwOGQzMC5qc1wiLFxuXHRcIi9jbGllbnQvbG9nb3V0LmE5MDY1ODQ2LmpzXCIsXG5cdFwiL2NsaWVudC9sb2dpbi41ZDc4YzI4ZC5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguZWZhMTdkNDQuanNcIixcblx0XCIvY2xpZW50L29mZmVyd2FsbHMuYjNkMWY2ZGMuanNcIixcblx0XCIvY2xpZW50L3Byb21vY29kZXMuZDRlMmU0OWQuanNcIixcblx0XCIvY2xpZW50L2dpdmVhd2F5LmRiZDJjZTk5LmpzXCIsXG5cdFwiL2NsaWVudC9pbnZpdGUuOTc4YjJkNGIuanNcIixcblx0XCIvY2xpZW50L3F1ZXN0cy5mNGI4NDZlZC5qc1wiLFxuXHRcIi9jbGllbnQvbGluay4yY2E5MDg1NS5qc1wiLFxuXHRcIi9jbGllbnQvZmFxLjdkYzk0MGMzLmpzXCIsXG5cdFwiL2NsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3dpdGhkcmF3XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kaXNjb3JkXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zdGFmZlxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3RhZmZcXC9yZWdpc3RlclxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3RhZmZcXC9sb2dvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3N0YWZmXFwvbG9naW5cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Vhcm5cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Vhcm5cXC9vZmZlcndhbGxzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9lYXJuXFwvcHJvbW9jb2Rlc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZWFyblxcL2dpdmVhd2F5XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9lYXJuXFwvaW52aXRlXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9lYXJuXFwvcXVlc3RzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9saW5rXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9mYXFcXC8/JC8gfVxuXTsiLCJpbXBvcnQgeyB0aW1lc3RhbXAsIGZpbGVzLCBzaGVsbCB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IHN0YXRpY0Fzc2V0cyA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKEFTU0VUUylcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcblx0XHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcblx0XHR9KVxuXHQpO1xufSk7XG5cblxuLyoqXG4gKiBGZXRjaCB0aGUgYXNzZXQgZnJvbSB0aGUgbmV0d29yayBhbmQgc3RvcmUgaXQgaW4gdGhlIGNhY2hlLiBcbiAqIEZhbGwgYmFjayB0byB0aGUgY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbmRDYWNoZShyZXF1ZXN0KSB7XG5cdGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oYG9mZmxpbmUke3RpbWVzdGFtcH1gKVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcblx0XHRjYWNoZS5wdXQocmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKHJlcXVlc3QpO1xuXHRcdGlmIChyZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xuXG5cdFx0dGhyb3cgZXJyO1xuXHR9XG59XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG5cdGNvbnN0IGlzSHR0cCA9IHVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJyk7XG5cdGNvbnN0IGlzRGV2U2VydmVyUmVxdWVzdCA9IHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0O1xuXHRjb25zdCBpc1N0YXRpY0Fzc2V0ID0gdXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBzdGF0aWNBc3NldHMuaGFzKHVybC5wYXRobmFtZSk7XG5cdGNvbnN0IHNraXBCZWNhdXNlVW5jYWNoZWQgPSBldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnICYmICFpc1N0YXRpY0Fzc2V0O1xuXG5cdGlmIChpc0h0dHAgJiYgIWlzRGV2U2VydmVyUmVxdWVzdCAmJiAhc2tpcEJlY2F1c2VVbmNhY2hlZCkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKFxuXHRcdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0Ly8gYWx3YXlzIHNlcnZlIHN0YXRpYyBmaWxlcyBhbmQgYnVuZGxlci1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGUuXG5cdFx0XHRcdC8vIGlmIHlvdXIgYXBwbGljYXRpb24gaGFzIG90aGVyIFVSTHMgd2l0aCBkYXRhIHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UsXG5cdFx0XHRcdC8vIHNldCB0aGlzIHZhcmlhYmxlIHRvIHRydWUgZm9yIHRoZW0gYW5kIHRoZXkgd2lsbCBvbmx5IGJlIGZldGNoZWQgb25jZS5cblx0XHRcdFx0Y29uc3QgY2FjaGVkQXNzZXQgPSBpc1N0YXRpY0Fzc2V0ICYmIGF3YWl0IGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KTtcblxuXHRcdFx0XHQvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXG5cdFx0XHRcdC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuXHRcdFx0XHQvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cblx0XHRcdFx0Lypcblx0XHRcdFx0aWYgKCFjYWNoZWRBc3NldCAmJiB1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gY2FjaGVzLm1hdGNoKCcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCovXG5cblx0XHRcdFx0cmV0dXJuIGNhY2hlZEFzc2V0IHx8IGZldGNoQW5kQ2FjaGUoZXZlbnQucmVxdWVzdCk7XG5cdFx0XHR9KSgpXG5cdFx0KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBQUE7Q0FDTyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFDdkM7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLGFBQWE7Q0FDZCxDQUFDLFdBQVc7Q0FDWixDQUFDLGNBQWM7Q0FDZixDQUFDLGtCQUFrQjtDQUNuQixDQUFDLGNBQWM7Q0FDZixDQUFDLFlBQVk7Q0FDYixDQUFDLG9CQUFvQjtDQUNyQixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxDQUFDO0FBRUY7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLGdDQUFnQztDQUNqQyxDQUFDLGdDQUFnQztDQUNqQyxDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDBCQUEwQjtDQUMz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
