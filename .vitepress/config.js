import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Md Atiquzzaman Soikat",
  description: "Personal Website of Md Atiquzzaman Soikat, a software developer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'About', link: '/about' },
      { text: 'Notes', link: '/notes' }
    ],

    sidebar: {
        '/notes':       {
            text: 'Notes',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
