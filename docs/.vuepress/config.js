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
    sideBar: {
      "/": "sss",
      "/guide": "guide",
    },
  },
};
