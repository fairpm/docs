// @ts-check


const navbarItems = [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Docs',
    },
    {
      to: '/blog',
      label: 'Blog',
      position: 'left'
    },
    {
      to: 'docs/contributing',
      label: 'Get involved',
      position: 'left'
    },
    {
      href: 'https://github.com/fairpm/docs',
      label: 'GitHub',
      position: 'right',
    },
    {
      href: 'https://fair.pm/',
      label: 'fair.pm',
      position: 'right',
    },
];

navbarItems.push({
    type: 'docSidebar',
    sidebarId: 'tscSidebar',
    docsPluginId: 'tsc',
    position: 'left',
    label: 'TSC',
});


export default navbarItems;
