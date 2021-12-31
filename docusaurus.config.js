// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Git Song',
  tagline: 'Git Song are cool',
  url: 'http://docs.gitsong.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/knowledge-map.svg',
  organizationName: 'Git Song', // Usually your GitHub org/user name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Git Song',
        logo: {
          alt: 'My Site Logo',
          src: 'img/knowledge-map.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   type: 'doc',
          //   docId: 'csharp/intro33',
          //   position: 'left',
          //   label: 'CSharp',
          // },
          {to: '/blog', label: 'Blog', position: 'left', blogSidebarCount: '10'},
          {
            href: 'https://github.com/gitsong99/docs.gitsong.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     }
          //   ],
          // },
          {
            // title: 'More',
            // items: [
            //   // {
            //   //   label: 'Blog',
            //   //   to: '/blog',
            //   // },
            //   // {
            //   //   label: 'GitHub',
            //   //   href: 'https://github.com/gitsong99/docs.gitsong.com',
            //   // },
            // ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GitSong, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
