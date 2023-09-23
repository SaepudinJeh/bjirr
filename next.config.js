/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dribbble.s3.amazonaws.com",
                // port: "",
                // pathname: "/*"
            },
            {
                protocol: "https",
                hostname: "drive.google.com",
                // port: "",
                // pathname: "/*"
            }
        ]
    }
}

module.exports = nextConfig
