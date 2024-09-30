import { useState, useCallback } from 'react';

interface UsePointsReturn {
  points: number;
  addPoints: (amount: number) => void;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}

export function usePoints(initialPoints: number): UsePointsReturn {
  const [points, setPoints] = useState(initialPoints);

  const addPoints = useCallback((amount: number) => {
    setPoints(prevPoints => prevPoints + amount);
  }, []);

  return { points, addPoints, setPoints };
}