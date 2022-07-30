/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,

   // must be removed in development
   swcMinify: false,
   webpack: (config) => {
      
      // external svg's parser
      config.module.rules.push({
         test: /\.svg$/,
         use: ["@svgr/webpack"]
      });
      return config;
   },
};

module.exports = nextConfig;
