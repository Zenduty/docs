module.exports = {
  title: 'Zenduty - General Documentation',
  tagline: 'Advanced Incident and On-Call Management for DevOps and SRE teams',
  url: 'http://docs.zenduty.com',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.png',
  organizationName: 'Zenduty', // Usually your GitHub org/user name.
  projectName: 'Zenduty', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '00808d264b6611cda3ba4754f7005d69',
      indexName: 'zenduty',
    },
    googleanalytics:{
      trackingID: 'UA-135991214-1',
    },
    gtag:{
      trackingID: 'UA-135991214-1',
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Zenduty',
        src: 'img/favicon/favicon.png',
      },
      links: [
        {to: 'docs/Introduction', label: 'Docs', position: 'left'},
        {
          href: '',
          label: '',
          position: '',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '',
              to: '',
            },
            {
              label: '',
              to: '',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Zenduty',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Zenduty',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl:
            '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
