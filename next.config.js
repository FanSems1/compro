const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ['images.unsplash.com', '3wzg6m6x-5000.asse.devtunnels.ms', '192.168.1.170'],
  },
  webpack(config) {
    // Optional: Enable code splitting
    config.optimization.splitChunks = {
      chunks: 'all',
    };
    return config;
  },
});
