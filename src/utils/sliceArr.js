export const chunk = (data, size) => {
  const items = [...data];
  const arr = [];

  while (items.length) {
    arr.push(items.splice(0, size));
  }

  return arr;
};
