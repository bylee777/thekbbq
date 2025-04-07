/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/the-k-bbq' : '',
  assetPrefix: isProd ? '/the-k-bbq/' : '',
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
