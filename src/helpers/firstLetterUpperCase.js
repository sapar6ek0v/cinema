export const firstLetterUpperCase = (str) =>
  str
    .split('_')
    .map((it) => it.charAt(0).toUpperCase() + it.slice(1))
    .join(' ');
