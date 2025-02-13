/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dehr27mj3/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
