/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    ENDPOINT_URL: process.env.ENDPOINT_URL,
  }
}


module.exports = nextConfig
