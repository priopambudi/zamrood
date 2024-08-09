/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://pandooin.com/api/:path*",
      },
    ];
  },
  images: {
    domains: ["ik.imagekit.io"],
  },
};

export default nextConfig;
