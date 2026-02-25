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
  integrations: [
    preact(),
    expressiveCode({
      themes: ["dracula"],
      frames: false,
      styleOverrides: {
        borderRadius: "12px",
        borderWidth: "1px",
        borderColor: "rgba(255, 255, 255, 0.08)",
        codeBg: "rgba(45, 45, 58, 0.9)",
        codeSelectionBg: "rgba(106, 0, 255, 0.3)",
        codeFontFamily:
          '"HackGenConsoleNF", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        codeFontSize: "0.85rem",
        codePadBlock: "1.2rem",
        codePadInline: "1.5rem",
        scrollbarThumbColor: "rgba(106, 0, 255, 0.4)",
        scrollbarThumbHoverColor: "rgba(255, 0, 60, 0.6)",
      },
    }),
    mdx(),
  ],
});