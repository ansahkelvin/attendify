/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "ucarecdn.com"
            },
            {
                protocol: 'https',
                hostname: "images.unsplash.com"
            }
        ],

    },
};


export default nextConfig;
