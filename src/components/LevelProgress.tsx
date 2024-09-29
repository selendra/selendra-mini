import React from 'react';
import { calculateProgress } from '@/utils/helpers';

interface LevelProgressProps {
  levelIndex: number;
  levelNames: string[];
  points: number;
  levelMinPoints: number[];
}

const LevelProgress: React.FC<LevelProgressProps> = ({ levelIndex, levelNames, points, levelMinPoints }) => {
  const progress = calculateProgress(points, levelIndex, levelMinPoints);

  return (
    <div className="flex items-center w-1/3">
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-sm">{levelNames[levelIndex]}</p>
          <p className="text-sm">{levelIndex + 1} <span className="text-[#95908a]">/ {levelNames.length}</span></p>
        </div>
        <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
          <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
            <div className="progress-gradient h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelProgress;