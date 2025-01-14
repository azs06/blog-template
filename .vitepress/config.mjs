import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Md Atiquzzaman Soikat",
  description: "Personal Landing Page",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog" },
      { text: "Projects", link: "/projects" },
    ],

    sidebar: {
      "/projects": {
        text: "Notes",
        items: [
          { text: "Open Source Projects", link: "/projects/personal" },
          { text: "Professional Projects", link: "/projects/professional" },
        ],
      },
    },
    footer: {
      message: "Made with vitepress",
      copyright: "Copyright © 2025 Md Atiquzzaman Soikat",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/azs06" },
    ],
  },
});
