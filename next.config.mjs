/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                port: '',
            },
        ],
    }
};

export default nextConfig;
