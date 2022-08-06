import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  loadingIndicator: {
    name: "circle",
    color: "red",
    background: "white",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "~/assets/icons/main/icon.png",
    },
  ],
});
