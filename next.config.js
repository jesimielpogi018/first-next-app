/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   webpack: (config) => {
      // development code here (must erase when production)
      config.optimization.minimize = false;
      config.optimization.minimizer = [];
      // ends here
      
      return config;
   },
};

module.exports = nextConfig;
