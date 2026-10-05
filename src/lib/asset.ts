// Prefixes a path to a file in public/ with the site's base path.
// On GitHub Pages the site lives under /<repo>/, and Next only adds that
// prefix to its own files, not to plain src/href strings like "/logo.png".
// Locally the base path is empty, so paths are returned unchanged.
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
