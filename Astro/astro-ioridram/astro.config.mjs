// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";

import expressiveCode from "astro-expressive-code";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  integrations: [preact(), expressiveCode(), mdx()],
});