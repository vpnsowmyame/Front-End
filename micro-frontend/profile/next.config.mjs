import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'profile_app',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ProfileApp': './pages/index.js',
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      })
    );
    return config;
  },
};

export default nextConfig;