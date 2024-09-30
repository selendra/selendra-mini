"use client";

import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { useInterval } from '@/hooks/useInterval';
import { calculateTimeLeft } from '@/utils/helpers';
import { levelNames, levelMinPoints } from '@/constants/levels';
import { usePoints } from '@/hooks/usePoints';
import { useLevel } from '@/hooks/useLevel';
import BottomNavigation from '@/components/BottomNavigation';
import DailyTasks from '@/components/DailyTasks';
import FloatingPoints from '@/components/FloatingPoints';
import Header from '@/components/Header';
import LevelProgress from '@/components/LevelProgress';
import MainCharacter from '@/components/MainCharacter';
import PointsDisplay from '@/components/PointsDisplay';
import ProfitDisplay from '@/components/ProfitDisplay';

const App: React.FC = () => {
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const { points, addPoints } = usePoints(22749365);
  const { levelIndex, updateLevel } = useLevel(6);
  const profitPerHour = 126420;

  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  const updateCountdowns = useCallback(() => {
    setDailyRewardTimeLeft(calculateTimeLeft(0));
    setDailyCipherTimeLeft(calculateTimeLeft(19));
    setDailyComboTimeLeft(calculateTimeLeft(12));
  }, []);

  useEffect(() => {
    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [updateCountdowns]);

  useEffect(() => {
    updateLevel(points);
  }, [points, updateLevel]);

  useInterval(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    addPoints(pointsPerSecond);
  }, 1000);

  const handleCardClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    addPoints(11);
    setClicks(prev => [...prev, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  }, [addPoints]);

  const handleAnimationEnd = useCallback((id: number) => {
    setClicks(prev => prev.filter(click => click.id !== id));
  }, []);

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <Header />
        
        <div className="px-4">
          <div className="flex items-center justify-between space-x-4 mt-1">
            <LevelProgress 
              levelIndex={levelIndex} 
              levelNames={levelNames} 
              points={points}
              levelMinPoints={levelMinPoints}
            />
            <ProfitDisplay profitPerHour={profitPerHour} />
          </div>
        </div>

        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
            <DailyTasks 
              dailyRewardTimeLeft={dailyRewardTimeLeft}
              dailyCipherTimeLeft={dailyCipherTimeLeft}
              dailyComboTimeLeft={dailyComboTimeLeft}
            />

            <PointsDisplay points={points} />

            <MainCharacter onClick={handleCardClick} />
          </div>
        </div>
      </div>

      <BottomNavigation />

      <FloatingPoints clicks={clicks} onAnimationEnd={handleAnimationEnd} />
    </div>
  );
};

export default App;