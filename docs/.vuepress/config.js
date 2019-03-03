module.exports = {
  base: '/study-notes/',
  title: '前端学习笔记及思维导图',
  dest: 'dist',
  description: '总结前端学习过程中的笔记，根据自己的思维结构画出脑海中的思维导图，有助于学习前端知识。',
  head: [['link', { rel: 'icon', href: `/logo.jpg` }]],
  themeConfig: {
    repo: 'Shiyanping/study-notes',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'vuepress',
    editLinkText: '欢迎大家来补充',
    lastUpdated: '上次更新',
    sidebarDepth: 1,
    nav: [
      {
        text: '博客',
        link: 'http://www.shiyanping.top/'
      },
      {
        text: '我的相关',
        items: [
          {
            text: '简历',
            link: 'http://www.shiyanping.top//resume/'
          },
          {
            text: '前端工具集',
            link: 'http://www.shiyanping.top/fe-tool'
          }
        ]
      }
    ],
    sidebar: [
      {
        title: '你不知道的 JavaScript',
        collapsable: true,
        children: ['JavaScript/type-of-data', 'JavaScript/scope-closure', 'JavaScript/prototype', 'JavaScript/async', 'JavaScript/strict-json', 'JavaScript/ES6', 'JavaScript/function-program']
      },
      {
        title: 'CSS 的世界',
        collapsable: true,
        children: ['css/CSS']
      },
      {
        title: 'HTML',
        collapsable: true,
        children: ['html/html']
      },
      {
        title: 'Vue',
        collapsable: true,
        children: ['vue/mvvm', 'vue/virtual-dom', 'vue/vue-basic', 'vue/vue-animation']
      },
      {
        title: '服务器端常识',
        collapsable: true,
        children: ['service/simple-understand', 'service/linux-often-cmd', 'service/linux-password', 'service/process', 'service/mysql', ]
      },
      {
        title: 'Node 半知半解',
        collapsable: true,
        children: ['service/Node', 'service/mvc', 'service/Express', 'service/Koa', 'service/package-json', 'service/npm']
      },
      {
        title: '世界上最好的语言 PHP',
        collapsable: true,
        children: ['service/php', 'service/Yii']
      },
      {
        title: '网络协议',
        collapsable: true,
        children: ['internet/http', 'internet/optimization']
      },
      {
        title: '浏览器知识',
        collapsable: true,
        children: ['browser/corss-domain']
      },
      {
        title: '自动化测试',
        collapsable: true,
        children: ['qa/qa']
      },
      {
        title: '性能优化',
        collapsable: true,
        children: ['performance/performance']
      },
      {
        title: '工程化',
        collapsable: true,
        children: ['engineering/CI']
      },
      {
        title: '软件工程学',
        collapsable: true,
        children: ['basis/git']
      }
    ]
  }
};
