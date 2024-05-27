/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.themoviedb.org/:path*',
      },
      // {
      //   source: '/img/:path*',
      //   destination: `${process.env.NEXT_URL_IMG}/:path*`,
      // },
    ];
  },
};

export default nextConfig;
