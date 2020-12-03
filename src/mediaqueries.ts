export const breakpoints = {
  mobile: 600,
  tablet: 768,
  medium: 980,
  laptop: 1024,
  xl: 1201
}

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) {${style}}`
}

