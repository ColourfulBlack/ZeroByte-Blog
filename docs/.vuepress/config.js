module.exports = {
    title: "ColourfulBlack's Blog",
    description: "Just For Fun.",
    base: "/",
    theme: "vuepress-theme-reco",
    themeConfig: {
        type: "blog",
        nav: [
            { text: "时间轴", link: "/timeline/", icon: "reco-date" }
        ],
        blogConfig: {
            category: {
                location: 1,
                text: '分类'
            },
            tag: {
                localtion: 2,
                text: '标签'
            },
            socialLinks: [
                { icon: "reco-github", link: "https://github.com/ColourfulBlack" }
            ]
        }
    }
}