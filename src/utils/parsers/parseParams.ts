const parseParams = (params: string) => {
  // @ts-ignore
  const output = {};
  const searchParams = new URLSearchParams(params);

  // Set will return only unique keys()
  // @ts-ignore
  new Set([...searchParams.keys()]).forEach((key: string) => {
    // @ts-ignore
    output[key] =
      searchParams.getAll(key).length > 1
        ? searchParams.getAll(key) // get multiple values
        : searchParams.get(key); // get single value
  });

  // @ts-ignore
  return output;
};

export default parseParams;
