/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/files', // Adjust the path as needed
          outputPath: 'static/files', // Adjust the path as needed
        },
      },
    });

    return config;
  }
}

module.exports = nextConfig
