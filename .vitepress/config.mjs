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
      "/notes": {
        text: "Notes",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      "/projects": {
        text: "Notes",
        items: [
          { text: "Open Source Projects", link: "/markdown-examples" },
          { text: "Professional Projects", link: "/api-examples" },
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
