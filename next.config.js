const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const getDomain = (url) => {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return url;
  }
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
const apiDomain = getDomain(apiBaseUrl);

module.exports = withBundleAnalyzer({
  images: {
    domains: ['images.unsplash.com', apiDomain, '3wzg6m6x-5000.asse.devtunnels.ms', '192.168.1.170'],
  },
  webpack(config) {
    // Optional: Enable code splitting
    config.optimization.splitChunks = {
      chunks: 'all',
    };
    return config;
  },
});
