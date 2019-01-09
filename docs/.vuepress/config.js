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
        title: '基础知识',
        collapsable: true,
        children: ['basis/HTML', 'basis/CSS', 'basis/JS', 'basis/jQuery', 'basis/ES6', 'basis/qa']
      },
      {
        title: 'Node 知识点',
        collapsable: true,
        children: ['node/packageJson']
      },
      {
        title: '后端知识概况',
        collapsable: true,
        children: ['service/View-Model', 'service/simple-understand', 'service/linux-often-cmd', 'service/web-server', 'service/php']
      },
      {
        title: '习题集',
        collapsable: true,
        children: ['question/JS']
      }
      // {
      //   title: '前端库/框架',
      //   collapsable: false,
      //   children: ['library/library', 'library/frame']
      // },
      // {
      //   title: '学习资源',
      //   collapsable: false,
      //   children: ['study/document', 'study/website', 'study/books', 'study/team']
      // },
      // {
      //   title: '博客',
      //   collapsable: false,
      //   children: ['blog/noMyBlog', 'blog/myBlog']
      // },
      // {
      //   title: '其他',
      //   collapsable: false,
      //   children: ['other/language', 'other/js/', 'other/css/']
      // }
    ]
  }
};
