/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Linting runs via `npm run lint` (eslint .). The legacy `next lint`
    // worker can't serialize the ESLint 9 flat config, so skip it in builds.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
