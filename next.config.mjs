/** @type {import('next').NextConfig} */
const nextConfig = {
  extends: "next/core-web-vitals",
  rules: {
    "react/no-unescaped-entities": "off",
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
