// @ts-check
const enabledExternalDocs = new Set(
    (process.env.DOCS_EXTERNAL ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
);

const externalDocs = [
    {
        id: 'tsc',
        label: 'TSC',
        path: 'external/tsc/faqs',
        routeBasePath: 'tsc',
        navbarPosition: 'left',
        sidebarId: 'tscSidebar',
        sidebarPath: './sidebars-tsc.js',
        editUrl: 'https://github.com/fairpm/tsc/blob/main/faqs/',
    },
    {
        id: 'fair-beacon',
        label: 'Fair Beacon',
        path: 'external/fair-beacon/',
        routeBasePath: 'fair-beacon',
        navbarPosition: 'left',
        sidebarId: 'fairBeaconSidebar',
        sidebarPath: './sidebars-fair-beacon.js',
        editUrl: 'https://github.com/fairpm/fair-beacon/',
    },
];

const enabledDocs = externalDocs.filter((docs) =>
    enabledExternalDocs.has(docs.id),
);

export default enabledDocs;