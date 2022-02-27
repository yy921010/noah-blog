module.exports = {
  title: "半左偏右",
  description: "半左偏右, 用于记录生活、技术、感想、笔记的播客",
  configureWebpack: {
    resolve: {
      alias: {
        "@docs": "docs",
      },
    },
  },
  plugins: [
    "@vuepress/active-header-links",
    {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor",
    },
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false,
    smoothScroll: true,
  },
};
