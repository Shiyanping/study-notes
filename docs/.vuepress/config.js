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
        children: ['JavaScript/type-of-data', 'JavaScript/scope-closure', 'JavaScript/prototype', 'JavaScript/async', 'JavaScript/strict-json', 'JavaScript/ES6']
      },
      {
        title: 'CSS 的世界',
        collapsable: true,
        children: ['css/CSS']
      },
      {
        title: '框架全解析',
        collapsable: true,
        children: ['frames/jQuery', 'frames/mvvm', 'frames/virtual-dom', 'frames/vue-basic', 'frames/vue-animation', 'frames/React']
      },
      {
        title: '后端知识概况',
        collapsable: true,
        children: ['service/View-Model', 'service/simple-understand', 'service/linux-often-cmd', 'service/web-server']
      },
      {
        title: 'Node 半知半解',
        collapsable: true,
        children: ['node/Node', 'node/mvc', 'node/Express', 'node/Koa', 'node/package-json', 'node/npm']
      },
      {
        title: '世界上最好的语言 PHP',
        collapsable: true,
        children: ['php/php', 'php/Yii']
      },
      {
        title: '网络相关',
        collapsable: true,
        children: ['internet/http']
      },
      {
        title: '其他补充知识',
        collapsable: true,
        children: ['others/HTML', 'others/QA', 'others/function-program']
      },
      {
        title: '习题集',
        collapsable: true,
        children: ['question/JS']
      }
    ]
  }
};
