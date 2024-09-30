import { useState, useCallback } from 'react';
import { levelMinPoints } from '@/constants/levels';

interface UseLevelReturn {
  levelIndex: number;
  updateLevel: (points: number) => void;
  setLevelIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function useLevel(initialLevel: number): UseLevelReturn {
  const [levelIndex, setLevelIndex] = useState(initialLevel);

  const updateLevel = useCallback((points: number) => {
    for (let i = levelMinPoints.length - 1; i >= 0; i--) {
      if (points >= levelMinPoints[i]) {
        setLevelIndex(i);
        break;
      }
    }
  }, []);

  return { levelIndex, updateLevel, setLevelIndex };
}