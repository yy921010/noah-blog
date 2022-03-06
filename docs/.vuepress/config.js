const path = require("path");
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
  postcss: {
    plugins: [
      require("tailwindcss")(path.join(__dirname, "../../tailwind.config.js")),
    ],
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
    smoothScroll: true,
  },
};
