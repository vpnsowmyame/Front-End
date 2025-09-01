import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
     const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'dashboard',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          chart_app: `chart_app@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          profile_app: `profile_app@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          notifications_app: `notifications_app@http://localhost:3003/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
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