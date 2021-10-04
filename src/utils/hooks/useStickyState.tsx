import { useEffect, useState } from 'react';

// https://www.joshwcomeau.com/snippets/react-hooks/use-sticky-state/

export const useStickyState = (defaultValue: any, key: string) => {
  const [value, setValue] = useState(() => {
    const stickyValue = localStorage.getItem(key);

    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
