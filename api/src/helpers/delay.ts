export const delay = async (ms: number) : Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
