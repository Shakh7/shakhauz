/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: process.env.NEXT_PUBLIC_DISABLE_ESLINT === 'true',
    },
    images: {
        domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
    },
};

export default nextConfig;
