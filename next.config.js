// Ensuring that the NextConfig type is recognized for autocompletion
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  // Including webpack configuration function inside the nextConfig object
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {
      common: {
        name: "common",
        chunks: "all",
      },
    };

    // Custom webpack config goes here
    return config;
  },
};

// Exporting the configuration object
module.exports = nextConfig;
