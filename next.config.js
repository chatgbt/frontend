/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    reactRemoveProperties: true,
    reactRemoveProperties: { properties: ['^data-custom$'] },
    removeConsole: {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig
