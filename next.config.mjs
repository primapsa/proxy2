/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/proxy/detail/movie/:path*',
        destination: `https://api.themoviedb.org/3/movie/:path*`,
      },
      {
        source: '/img/:path*',
        destination: `https://api.themoviedb.org/:path*`,
      },
      {
        source: '/proxy/movies:path*',
        destination: `https://api.themoviedb.org/3/discover/movie:path*`,
      },
      {
        source: '/proxy/genres',
        destination: `https://api.themoviedb.org/3/genre/movie/list`,
      },
    ];
  },
};

export default nextConfig;
