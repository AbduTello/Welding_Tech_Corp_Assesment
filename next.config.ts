import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/Welding_Tech_Corp_Assesment");
// empty for local dev and builds, so nothing changes there
const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder; otherwise a stray lockfile higher
  // up (e.g. in the home directory) makes Next guess the wrong root
  turbopack: {
    root: import.meta.dirname,
  },
  // Exposed to the browser so asset() can prefix paths to public/ files
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
  // GitHub Pages serves static files from a subpath and has no image server
  ...(pagesBasePath && {
    output: "export",
    basePath: pagesBasePath,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
