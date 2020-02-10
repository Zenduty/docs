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
      title: 'Zenduty - General Documentation',
      logo: {
        alt: 'Zenduty',
        src: 'img/favicon/favicon.png',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Zenduty created by YellowAnt.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:""
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
