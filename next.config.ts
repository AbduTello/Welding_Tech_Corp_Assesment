import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder; otherwise a stray lockfile higher
  // up (e.g. in the home directory) makes Next guess the wrong root
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
