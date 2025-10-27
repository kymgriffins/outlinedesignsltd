

import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: false,

  typescript: {
    shim: false,
  },



  // Vuetify build configuration
  build: {
    transpile: ["vuetify"],
  },

  modules: ["@pinia/nuxt"],

  app: {
    head: {
      title: "Architect Weldon - Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Discover Architect Weldon's portfolio showcasing innovative architectural designs, projects, and services. Expert in modern architecture, sustainable building, and creative solutions." },
        { name: "keywords", content: "architect, portfolio, design, architecture, building, sustainable, modern, Weldon" },
        { name: "author", content: "Architect Weldon" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Architect Weldon - Portfolio" },
        { property: "og:description", content: "Explore Architect Weldon's portfolio of innovative architectural designs and projects." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://outlinedesignsltd.vercel.app" },
        { property: "og:image", content: "https://outlinedesignsltd.vercel.app/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Architect Weldon - Portfolio" },
        { name: "twitter:description", content: "Explore Architect Weldon's portfolio of innovative architectural designs and projects." },
        { name: "twitter:image", content: "https://outlinedesignsltd.vercel.app/og-image.jpg" },
      ],
      link: [
        { rel: "canonical", href: "https://outlinedesignsltd.vercel.app" },
      ],
    },
  },

  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],
  compatibilityDate: '2025-05-15',
});
