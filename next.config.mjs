/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    API_PROXY: process.env.API_PROXY,
  },
};

export default nextConfig;
