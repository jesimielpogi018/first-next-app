/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   // must be removed in development
   swcMinify: false,
   webpack: (config) => {
      
      return config;
   },
};

module.exports = nextConfig;
