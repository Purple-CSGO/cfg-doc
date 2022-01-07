module.exports = {
  theme:"antdocs",
  title: "CFG预设",
  description: "",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    backToTop: true,
    editLinks: false,
    smoothScroll: true,
    lastUpdated: "上次更新",
    logo: '/assets/logo.png', //网页顶端导航栏左上角的图标
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    sidebarDepth: 1,
    repo: "https://github.com/Purple-CSGO/CSGO-Config-Presets",

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'Purp1e', // 必需
      href: 'https://github.com/Purple-CSGO' // 可选的
    },
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: '.theme-antdocs-content :not(a) > img',
      options: {
        margin: 16
      }
    },

    '@vuepress/search': {
      searchMaxSuggestions: 10
    },

    '@vuepress/nprogress':{},
  }
};