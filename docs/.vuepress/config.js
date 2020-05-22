module.exports = {
    base: '/n-ui/',
    title: 'Nui',
    description: 'Just playing around',
    head: [['link', {rel: 'icon', href: '/n.png'}]],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: '组件', link: '/components/' },
        ],
        sidebarDepth:0,
        sidebar: {
          '/components/':require('./constant/componentsSidebar')
        }
      }
};
