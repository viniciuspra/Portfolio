/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
