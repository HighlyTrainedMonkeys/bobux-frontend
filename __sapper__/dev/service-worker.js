(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1612969059286;

	const files = [
		"/service-worker-index.html",
		"/favicon.png",
		"/index.css",
		"/logo-192.png",
		"/logo-512.png",
		"/logo.png",
		"/manifest.json",
		"/tailwind.css"
	];

	const shell = [
		"/client/client.cab3a2e5.js",
		"/client/index.b7a4aeb5.js",
		"/client/withdraw.4cd958b6.js",
		"/client/Success.cd32cd6e.js",
		"/client/Loader.4c52306e.js",
		"/client/discord.cadcb128.js",
		"/client/index.6471ceb7.js",
		"/client/auth.esm.7a3eb8cb.js",
		"/client/register.6638c1e0.js",
		"/client/logout.5ddc3eca.js",
		"/client/login.cb329ad3.js",
		"/client/index.f7c5298c.js",
		"/client/offerwalls.e295a646.js",
		"/client/promocodes.b79910f1.js",
		"/client/giveaway.d1685c4a.js",
		"/client/invite.24974aa5.js",
		"/client/quests.e135d0af.js",
		"/client/link.13c88f8d.js",
		"/client/faq.2c09c8a0.js",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYxMjk2OTA1OTI4NjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2Zhdmljb24ucG5nXCIsXG5cdFwiL2luZGV4LmNzc1wiLFxuXHRcIi9sb2dvLTE5Mi5wbmdcIixcblx0XCIvbG9nby01MTIucG5nXCIsXG5cdFwiL2xvZ28ucG5nXCIsXG5cdFwiL21hbmlmZXN0Lmpzb25cIixcblx0XCIvdGFpbHdpbmQuY3NzXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCIvY2xpZW50L2NsaWVudC5jYWIzYTJlNS5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguYjdhNGFlYjUuanNcIixcblx0XCIvY2xpZW50L3dpdGhkcmF3LjRjZDk1OGI2LmpzXCIsXG5cdFwiL2NsaWVudC9TdWNjZXNzLmNkMzJjZDZlLmpzXCIsXG5cdFwiL2NsaWVudC9Mb2FkZXIuNGM1MjMwNmUuanNcIixcblx0XCIvY2xpZW50L2Rpc2NvcmQuY2FkY2IxMjguanNcIixcblx0XCIvY2xpZW50L2luZGV4LjY0NzFjZWI3LmpzXCIsXG5cdFwiL2NsaWVudC9hdXRoLmVzbS43YTNlYjhjYi5qc1wiLFxuXHRcIi9jbGllbnQvcmVnaXN0ZXIuNjYzOGMxZTAuanNcIixcblx0XCIvY2xpZW50L2xvZ291dC41ZGRjM2VjYS5qc1wiLFxuXHRcIi9jbGllbnQvbG9naW4uY2IzMjlhZDMuanNcIixcblx0XCIvY2xpZW50L2luZGV4LmY3YzUyOThjLmpzXCIsXG5cdFwiL2NsaWVudC9vZmZlcndhbGxzLmUyOTVhNjQ2LmpzXCIsXG5cdFwiL2NsaWVudC9wcm9tb2NvZGVzLmI3OTkxMGYxLmpzXCIsXG5cdFwiL2NsaWVudC9naXZlYXdheS5kMTY4NWM0YS5qc1wiLFxuXHRcIi9jbGllbnQvaW52aXRlLjI0OTc0YWE1LmpzXCIsXG5cdFwiL2NsaWVudC9xdWVzdHMuZTEzNWQwYWYuanNcIixcblx0XCIvY2xpZW50L2xpbmsuMTNjODhmOGQuanNcIixcblx0XCIvY2xpZW50L2ZhcS4yYzA5YzhhMC5qc1wiLFxuXHRcIi9jbGllbnQvc2FwcGVyLWRldi1jbGllbnQuMWU3YTRhNWUuanNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBwYXR0ZXJuOiAvXlxcLyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC93aXRoZHJhd1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGlzY29yZFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3RhZmZcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3N0YWZmXFwvcmVnaXN0ZXJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3N0YWZmXFwvbG9nb3V0XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zdGFmZlxcL2xvZ2luXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9lYXJuXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9lYXJuXFwvb2ZmZXJ3YWxsc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZWFyblxcL3Byb21vY29kZXNcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Vhcm5cXC9naXZlYXdheVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZWFyblxcL2ludml0ZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZWFyblxcL3F1ZXN0c1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbGlua1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZmFxXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBzdGF0aWNBc3NldHMgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuXHRldmVudC53YWl0VW50aWwoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3BlbihBU1NFVFMpXG5cdFx0XHQudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnNraXBXYWl0aW5nKCk7XG5cdFx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XG5cdFx0XHQvLyBkZWxldGUgb2xkIGNhY2hlc1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZi5jbGllbnRzLmNsYWltKCk7XG5cdFx0fSlcblx0KTtcbn0pO1xuXG5cbi8qKlxuICogRmV0Y2ggdGhlIGFzc2V0IGZyb20gdGhlIG5ldHdvcmsgYW5kIHN0b3JlIGl0IGluIHRoZSBjYWNoZS4gXG4gKiBGYWxsIGJhY2sgdG8gdGhlIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kQ2FjaGUocmVxdWVzdCkge1xuXHRjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKGBvZmZsaW5lJHt0aW1lc3RhbXB9YClcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG5cdFx0Y2FjaGUucHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChyZXF1ZXN0KTtcblx0XHRpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuXHRcdHRocm93IGVycjtcblx0fVxufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xuXHRpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09ICdHRVQnIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoJ3JhbmdlJykpIHJldHVybjtcblxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcblxuXHQvLyBkb24ndCB0cnkgdG8gaGFuZGxlIGUuZy4gZGF0YTogVVJJc1xuXHRjb25zdCBpc0h0dHAgPSB1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpO1xuXHRjb25zdCBpc0RldlNlcnZlclJlcXVlc3QgPSB1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydDtcblx0Y29uc3QgaXNTdGF0aWNBc3NldCA9IHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgc3RhdGljQXNzZXRzLmhhcyh1cmwucGF0aG5hbWUpO1xuXHRjb25zdCBza2lwQmVjYXVzZVVuY2FjaGVkID0gZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJyAmJiAhaXNTdGF0aWNBc3NldDtcblxuXHRpZiAoaXNIdHRwICYmICFpc0RldlNlcnZlclJlcXVlc3QgJiYgIXNraXBCZWNhdXNlVW5jYWNoZWQpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlLlxuXHRcdFx0XHQvLyBpZiB5b3VyIGFwcGxpY2F0aW9uIGhhcyBvdGhlciBVUkxzIHdpdGggZGF0YSB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlLFxuXHRcdFx0XHQvLyBzZXQgdGhpcyB2YXJpYWJsZSB0byB0cnVlIGZvciB0aGVtIGFuZCB0aGV5IHdpbGwgb25seSBiZSBmZXRjaGVkIG9uY2UuXG5cdFx0XHRcdGNvbnN0IGNhY2hlZEFzc2V0ID0gaXNTdGF0aWNBc3NldCAmJiBhd2FpdCBjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cblx0XHRcdFx0Ly8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuXHRcdFx0XHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcblx0XHRcdFx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGlmICghY2FjaGVkQXNzZXQgJiYgdXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhY2hlcy5tYXRjaCgnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQqL1xuXG5cdFx0XHRcdHJldHVybiBjYWNoZWRBc3NldCB8fCBmZXRjaEFuZENhY2hlKGV2ZW50LnJlcXVlc3QpO1xuXHRcdFx0fSkoKVxuXHRcdCk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUFBO0NBQ08sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDO0NBQ08sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxZQUFZO0NBQ2IsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsZUFBZTtDQUNoQixDQUFDLFdBQVc7Q0FDWixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyxDQUFDO0FBRUY7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLGdDQUFnQztDQUNqQyxDQUFDLGdDQUFnQztDQUNqQyxDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLHlCQUF5QjtDQUMxQixDQUFDLHVDQUF1QztDQUN4QyxDQUFDOztDQ2xDRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ25DO0NBQ0E7Q0FD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
