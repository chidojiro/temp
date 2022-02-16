module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeDetection: false,
    reloadOnPrerender: process.env.NODE_ENV !== 'production',
    localePath: path.resolve('./public/locales'),
  },
};
