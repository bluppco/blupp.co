import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: 'https://blupp.co/',
	integrations: [tailwind({
		applyBaseStyles: false
	}), , mdx(), react()],
	output: "server",
	adapter: cloudflare({
		runtime: {
			mode: 'local',
			type: 'pages'
		},
		routes: {
			exclude: ["/icons/*", "/images/*"]
		}
	})
});
