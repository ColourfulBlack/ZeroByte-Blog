module.exports = {
    title: "ColourfulBlack's Blog",
    head: [
        ['link', { rel: 'icon', type: "image/x-icon", href: "/favicon.ico" }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.2.1/github-markdown.min.css" }]
    ],
    description: "A Blog Just For Fun.",
    base: "/",
    permalink: "/:slug",
    theme: "vuepress-theme-reco",
    themeConfig: {
        author: "ColourfulBlack",
        authorAvatar: "/head.jpg",
        logo: "/head.jpg",
        type: "blog",
        sidebar: "auto",
        noFoundPageByTencent: false,
        nav: [
            { text: '主页', link: '/', icon: 'reco-home' },
            { text: "时间轴", link: "/timeline/", icon: "reco-date" }
        ],
        blogConfig: {
            category: {
                location: 2,
                text: '分类'
            },
            tag: {
                localtion: 3,
                text: '标签'
            },
            socialLinks: [
                { icon: "reco-github", link: "https://github.com/ColourfulBlack" }
            ]
        }
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
          }
    },
    plugins: [
        ['vuepress-plugin-mermaidjs'],  // 支持流程图
        ['vuepress-plugin-container'],  // markdown拓展语法-自定义容器
        ['vuepress-plugin-smooth-scroll'],  // 平滑滚动
        ['vuepress-plugin-reading-progress']  // 阅读进度条
        ['@vuepress/nprogress'],  // 加载进度条
        ['@vuepress/medium-zoom']
    ]
}