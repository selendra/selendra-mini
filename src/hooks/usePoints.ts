import { useState, useCallback } from 'react';

export function usePoints(initialPoints: number) {
  const [points, setPoints] = useState(initialPoints);

  const addPoints = useCallback((amount: number) => {
    setPoints(prevPoints => prevPoints + amount);
  }, []);

  return { points, addPoints };
}