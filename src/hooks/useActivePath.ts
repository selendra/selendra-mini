import { useEffect, useState } from 'react';

export function useActivePath(): string {
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return activePath;
}