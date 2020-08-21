const path = require('path');

module.exports = {
    base: '/n-ui/',
    title: 'Nui',
    description: 'Just playing around',
    head: [['link', {rel: 'icon', href: '/n.png'}]],
    plugins: [
      '@vuepress/last-updated',
      '@vuepress/back-to-top',
      [
        'live',
        {
          // to use a custom layout for your vue components
          layout: path.resolve(__dirname, './layout.vue'),
        }
      ],
    ],
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../lib'),
        }
      },
    },
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: '组件', link: '/comp/' },
        ],
        sidebarDepth:0,
        sidebar: {
          '/comp/':require('./constant/componentsSidebar')
        }
      }
};
