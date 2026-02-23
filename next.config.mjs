/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: import.meta.dirname, // Use import.meta.dirname for .mjs
}

export default nextConfig