/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}

export default nextConfig;
