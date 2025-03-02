module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'private-state-token-redemption=(self)',
          },
        ],
      },
    ];
  },
};