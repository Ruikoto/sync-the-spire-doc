import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Sync the Spire',
  description: '一键同步《杀戮尖塔2》Mod 配置，和朋友用同一套 Mod 联机。',

  // Cleaner URLs: /guide instead of /guide.html
  cleanUrls: true,

  // Faster HMR in dev
  vite: {
    server: {
      host: true,
    },
  },

  // Page metadata
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Sync the Spire' }],
    ['meta', { name: 'og:description', content: '一键同步《杀戮尖塔2》Mod 配置，和朋友用同一套 Mod 联机。' }],
  ],

  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '指南', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: '常见问题', link: '/faq' },
      { text: '更新日志', link: '/changelog' },
      {
        text: '下载',
        link: '/guide/installation',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '下载安装', link: '/guide/installation' },
          ],
        },
        {
          text: '使用指南',
          items: [
            { text: '做房主', link: '/guide/host' },
            { text: '跟随别人', link: '/guide/join' },
            { text: 'Mod 开关', link: '/guide/mod-toggle' },
            { text: '存档重定向', link: '/guide/save-redirect' },
            { text: '存档备份', link: '/guide/save-backup' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ruikoto/sync-the-spire' },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '© 2026 Ruikoto',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
