/* eslint-disable import/prefer-default-export */
export const arrayToString = (arr, { flag }) => {
  if (!flag) arr.reduce((prev, next) => prev.concat(next), '');
};
