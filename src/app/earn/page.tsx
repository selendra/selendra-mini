"use client";

import './../App.css';
import React, { useState } from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import EarnScreen from '@/components/EarnScreen';

const Mine: React.FC = () => {
  const [totalPoints, setTotalPoints] = useState(20200)
  const updatePoints = (points: number) => {
    setTotalPoints(prevPoints => prevPoints + points)
  }

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="flex-grow flex flex-col mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0 overflow-hidden">
          <div className="absolute inset-0 top-[2px] bg-[#1d2025] rounded-t-[46px] flex flex-col">
            <div className="flex-grow overflow-y-auto">
              <EarnScreen totalPoints={totalPoints} updatePoints={updatePoints}/>
            </div>
          </div>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Mine;