/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || ''
const withBase = repoName ? `/${repoName}` : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure basePath/assetPrefix for GitHub Pages when provided
  basePath: withBase || undefined,
  assetPrefix: withBase || undefined,
}

module.exports = nextConfig