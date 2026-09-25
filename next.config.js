const path = require('path')
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
 
module.exports = {
  ...(basePath && {
    output: 'export',
    basePath,
    trailingSlash: true,
    distDir: '.next-pages',
  }),
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: Boolean(basePath),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
}