/** @type {import('next').NextConfig} */

const nextConfig={
  async headers() { return [
    { source: "/login/success", headers: [ { key: "Cross-Origin-Opener-Policy", value: "same-origin" }, ] },
    { source: "/login/failure", headers: [ { key: "Cross-Origin-Opener-Policy", value: "same-origin" }, ] },
  ] },
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  swcMinify: false
}

module.exports=nextConfig