/* eslint-disable import/prefer-default-export */
export type Option = {
  flag: boolean;
};
export const arrayToString = (arr: Array<string>, options: Option): string => {
  const { flag } = options;
  if (flag) return arr.reduce((prev, next) => prev.concat(next), '');
  return 'Nope';
};
