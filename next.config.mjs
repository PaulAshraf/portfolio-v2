import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

// Plugins are referenced by package name so the config works with Turbopack.
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['@mapbox/rehype-prism'],
  },
})

export default withMDX(nextConfig)
