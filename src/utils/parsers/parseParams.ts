export const parseParams = (params: string) => {
  const searchParams = new URLSearchParams(params);

  return Array.from(searchParams.keys()).reduce((acc, item) => {
    const value = searchParams.get(item);

    return {
      ...acc,
      [item]: value
    };
  }, {});
};
