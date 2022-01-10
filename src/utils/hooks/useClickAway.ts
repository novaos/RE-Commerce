import { useEffect } from 'react';

const useClickAway = (ref: any, handleClickOutside: () => void, dependency: boolean) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target) && dependency) {
      handleClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export { useClickAway };
