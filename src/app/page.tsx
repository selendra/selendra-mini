"use client";

import './App.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
import { getUserData, updateUserPoints, updateUserLevel, updateDailyTasks, IUser } from '@/api/userApi';

const App: React.FC = () => {
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const { points, addPoints, setPoints } = usePoints(0);
  const { levelIndex, updateLevel, setLevelIndex } = useLevel(0);
  const [profitPerHour, setProfitPerHour] = useState(0);
  const [username, setUsername] = useState('player1');
  const [isLoading, setIsLoading] = useState(true);

  const [dailyTasks, setDailyTasks] = useState({
    dailyRewardTimeLeft: "",
    dailyCipherTimeLeft: "",
    dailyComboTimeLeft: ""
  });

  const updateCountdowns = useCallback(() => {
    setDailyTasks({
      dailyRewardTimeLeft: calculateTimeLeft(0),
      dailyCipherTimeLeft: calculateTimeLeft(19),
      dailyComboTimeLeft: calculateTimeLeft(12)
    });
  }, []);

  const handleAddPoints = useCallback(async (amount: number) => {
    addPoints(amount);
    try {
      await updateUserPoints(username, amount);
    } catch (error) {
      console.error('Failed to update points in database:', error);
      addPoints(-amount);
    }
  }, [username, addPoints]);

  const handleUpdateLevel = useCallback(async (newLevel: number) => {
    setLevelIndex(newLevel);
    try {
      await updateUserLevel(username, newLevel);
    } catch (error) {
      console.error('Failed to update level in database:', error);
    }
  }, [username, setLevelIndex]);

  const fetchUserData = useCallback(async () => {
    setIsLoading(true);
    try {
      const userData: IUser = await getUserData(username);
      setPoints(userData.points);
      setLevelIndex(userData.level);
      setProfitPerHour(userData.profitPerHour);
      // Update daily tasks timers based on userData.lastDailyReward, etc.
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoading(false);
    }
  }, [username, setPoints, setLevelIndex]);

  useEffect(() => {
    fetchUserData();
    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [fetchUserData, updateCountdowns]);

  useEffect(() => {
    updateLevel(points);
  }, [points, updateLevel]);

  useInterval(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    handleAddPoints(pointsPerSecond);
  }, 1000);

  const handleCardClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const pointsToAdd = 11;
    handleAddPoints(pointsToAdd);
    setClicks(prev => [...prev, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  }, [handleAddPoints]);

  const handleAnimationEnd = useCallback((id: number) => {
    setClicks(prev => prev.filter(click => click.id !== id));
  }, []);

  const memoizedLevelProgress = useMemo(() => (
    <LevelProgress 
      levelIndex={levelIndex} 
      levelNames={levelNames} 
      points={points}
      levelMinPoints={levelMinPoints}
    />
  ), [levelIndex, points]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen bg-black text-white">Loading...</div>;
  }

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <Header />
        
        <div className="px-4">
          <div className="flex items-center justify-between space-x-4 mt-1">
            {memoizedLevelProgress}
            <ProfitDisplay profitPerHour={profitPerHour} />
          </div>
        </div>

        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
            <DailyTasks 
              dailyRewardTimeLeft={dailyTasks.dailyRewardTimeLeft}
              dailyCipherTimeLeft={dailyTasks.dailyCipherTimeLeft}
              dailyComboTimeLeft={dailyTasks.dailyComboTimeLeft}
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