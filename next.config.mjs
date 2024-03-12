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
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                port: '',
            },
        ],
    }
};

export default nextConfig;
