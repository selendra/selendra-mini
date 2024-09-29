/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.icons8.com'], // Add the external domain here
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;
