const enUSThemeConfig = {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
        { text: 'Home', link: '/' }
    ],

    sidebar: [
        {
            text: '',
            items: [
                { text: 'Home', link: '/' }
            ]
        }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/Kevin13305-org/Kevin13305-org.github.io' }
    ],

    footer: {
        message: `Released under GPLv3 License`,
        copyright: '© 2025 Kevin13305-org. All rights reserved.'
    },

    editLink: {
        pattern: 'https://github.com/Kevin13305-org/Kevin13305-org.github.io/edit/main/docs/:path',
        text: "Edit this page on GitHub"
    },

    outline: {
        level: "deep", // 右侧大纲标题层级
    }
}

export default enUSThemeConfig