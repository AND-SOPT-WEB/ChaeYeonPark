export const createRandomArray = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).sort(
    () => Math.random() - 0.5
  );
};
