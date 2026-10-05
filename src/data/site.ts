// The deployed site's full URL, used for canonical links, share images,
// robots.txt, and the sitemap. The GitHub Pages workflow sets it; locally it
// falls back to the dev server.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Welding Technology Corp";

export const SITE_TITLE =
  "Welding Technology Corp | Resistance Welding Controls";

export const SITE_DESCRIPTION =
  "Welding Technology Corp designs, manufactures, and services resistance welding controls, trusted worldwide since 1936.";

// 1200x630 share card in public/, built from the hero poster
export const SHARE_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Welding Technology Corp: resistance welding controls, trusted worldwide",
};
