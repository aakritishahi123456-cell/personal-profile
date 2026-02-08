/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/personal-profile',
    assetPrefix: '/personal-profile',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
