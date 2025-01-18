import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Md Atiquzzaman Soikat",
  description: "Personal Landing Page",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog" },
      { text: "Work", link: "/works/" },
      { text: "Projects", link: "/projects/" },
    ],
    aside: false,
    footer: {
      message: "Made with vitepress",
      copyright: "Copyright © 2025 Md Atiquzzaman Soikat",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/azs06" },
    ],
  },
});
