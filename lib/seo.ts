export const SITE_ORIGIN = "https://rrlbuildersanddevelopers.com"

export function canonicalUrl(path: string) {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`
  return `${SITE_ORIGIN}${normalizedPath}`
}
