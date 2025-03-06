/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = nextConfig; 