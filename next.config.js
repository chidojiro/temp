/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/:any*/',
  //       destination: '/'
  //     }
  //   ]
  // }
};
