const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const CompressionPlugin = require('compression-webpack-plugin');

const isDeploy = process.env.NODE_ENV === 'production';

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./polyfills.js')
      ) {
        entries['main.js'].unshift('./polyfills.js');
      }

      return entries;
    };

    const plugins = [...config.plugins];

    if (isDeploy) {
      plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          threshold: 10240, // 10 kb
          minRatio: 0.8,
        }),
      );
    }

    return {
      ...config,
      plugins,
    };
  },
});
