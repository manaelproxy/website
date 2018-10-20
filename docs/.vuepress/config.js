module.exports = {
  description: 'Manael is a simple HTTP proxy for processing images.',
  head: [
    ['link', { href: '/favicon.png', rel: 'icon' }]
  ],
  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { link: '/guide/', text: 'Guide' },
      { link: 'https://godoc.org/manael.org/x/manael', text: 'GoDoc' },
      { link: 'https://github.com/manaelproxy/manael', text: 'GitHub' }
    ],
    repo: 'manaelproxy/website',
    search: false,
    sidebar: {
      '/guide/': ['']
    }
  },
  title: 'Manael'
}
