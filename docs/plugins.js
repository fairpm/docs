// @ts-check


const plugins = [
    [
        '@docusaurus/plugin-content-docs',
        {
          id: 'tsc',
          path: 'external/tsc/faqs',
          routeBasePath: 'tsc',
          sidebarPath: require.resolve('./sidebars-tsc.js'),
          editUrl: ({docPath}) =>
            `https://github.com/fairpm/tsc/blob/main/faqs/${docPath}`,
        },
    ],
];


export default plugins;
