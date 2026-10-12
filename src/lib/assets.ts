/** Prefix public assets when the site is deployed under a GitHub Pages project path. */
export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
}
