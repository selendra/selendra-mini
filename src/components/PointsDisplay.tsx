import React from 'react';
import riseCoin from '@/assets/rise-coin.png';
import Image from 'next/image';

interface PointsDisplayProps {
  points: number;
}

const PointsDisplay: React.FC<PointsDisplayProps> = ({ points }) => {
  return (
    <div className="px-4 mt-4 flex justify-center">
      <div className="px-4 py-2 flex items-center space-x-2">
        <img src={riseCoin.src} alt="Dollar Coin" className="w-10 h-10" />
        <p className="text-4xl text-white">{points.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PointsDisplay;