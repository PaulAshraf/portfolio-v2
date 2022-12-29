import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import rehypePrismDiff from 'rehype-prism-diff'
import withVideos from 'next-videos'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  webpack: {},
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      unoptimized: true,
      allowFutureImage: true,
    },
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism, rehypePrismDiff],
  },
})

export default withMDX(withVideos(nextConfig))
