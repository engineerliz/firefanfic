const BreakPointValues = {
  s: 600,
  md: 768,
  lg: 992,
  xl: 1200,
};

const BreakPoints = {
  xs: `@media only screen and (max-width: ${BreakPointValues.s}px)`,
  sm: `@media only screen and (max-width: ${BreakPointValues.md}px)`,
  md: `@media only screen and (max-width: ${BreakPointValues.lg}px)`,
  lg: `@media only screen and (max-width: ${BreakPointValues.xl}px)`,
  xl: `@media only screen and (min-width: ${BreakPointValues.xl}px)`,
};

export default BreakPoints;
