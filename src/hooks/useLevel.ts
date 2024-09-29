import { useState, useCallback } from 'react';
import { levelMinPoints } from '@/constants/levels';

export function useLevel(initialLevel: number) {
  const [levelIndex, setLevelIndex] = useState(initialLevel);

  const updateLevel = useCallback((points: number) => {
    for (let i = levelMinPoints.length - 1; i >= 0; i--) {
      if (points >= levelMinPoints[i]) {
        setLevelIndex(i);
        break;
      }
    }
  }, []);

  return { levelIndex, updateLevel };
}