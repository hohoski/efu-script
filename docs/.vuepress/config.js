// config.js
module.exports = {
    title: 'efu-study', // 사이트 타이틀
    description: 'vuepress로 만든 문서입니다.',
    themeConfig: {
      logo: '', // 로고 이미지
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Deep Dive', link: '/deepDive/' },
        { text: 'vue', link: '/vue/' }
      ],
      sidebar: {
        '/deepDive/' : [
            '',
            'introduce',
            'programing',
            'javascript',
            'executionEnvironment',
            'variable',
            ],

        '/vue/' : [
            '',
            'introduce',
            'firstSetting',
        ],
        // fallback
        '/': [
            '',        /* / */
        ]

      },
    },
    plugin:[
        ['@vuepress/back-to-top']
    ]
  } 