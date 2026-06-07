/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pocketbase.vmoliver.cloud",
            },
        ],
    },
};

export default nextConfig;