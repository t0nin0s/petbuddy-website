export const breakpoints = {
  sm: 768,
  md: 1024,
  lg: 1201
}

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) {${style}}`
}

