const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'SZZ',
  tagline: 'SZZ topics',
  favicon: 'img/favicon.ico',
  noIndex: true,

  url: 'https://fit-szz.github.io', // Your website URL
  baseUrl: '/szz-bootcamp/',
  projectName: 'szz-bootcamp',
  organizationName: 'fit-szz',



  themeConfig: {
    navbar: {
      title: 'SZZ',
      items: [
        {
          to: 'topics/SPOL',
          label: 'SPOL',
          position: 'left',
        },
        {
          to: 'topics/WSI-SI',
          label: 'WSI-SI',
          position: 'left',
        },
        {
          to: 'topics/PI',
          label: 'PI',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SZZ FIT CTU students. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          path: 'topics',
          routeBasePath: 'topics',
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
};
