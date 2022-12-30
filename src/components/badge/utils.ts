export const getViewsDisplay = (views?: number) => {
  if (!views) {
    return '0';
  }
  if (views < 1000) {
    return `${views}`;
  }
  if (views < 1000000) {
    return `${(views/1000).toFixed(1)}k`
  }
  if (views < 1000000000) {
    return `${(views/1000000).toFixed(1)}m`
  }
}