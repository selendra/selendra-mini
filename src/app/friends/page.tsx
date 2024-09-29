"use client";

import './../App.css';
import React from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import FriendScreen from '@/components/FriendScreen';

const Mine: React.FC = () => {
  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-black text-white min-h-screen font-bold flex flex-col max-w-xl">
        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px] overflow-y-auto">
            <FriendScreen totalPoints={2000}/>
          </div>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Mine;