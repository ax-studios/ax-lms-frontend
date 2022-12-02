/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching,
	// todo: In development, you might want to disable PWA because it gives a lot of console messages.
	disable: process.env.NODE_ENV === 'development'
});

module.exports = withPWA({
	reactStrictMode: true,
	images: {
		domains: ['user-images.githubusercontent.com', 'www.github.com']
	}
});
