/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_URL: process.env.SERVER_URL
    },
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '4200',
              pathname: '/api/media/**',
            },
          ],
    }
}

module.exports = nextConfig
