import React from 'react';
import Hamster from '@/icons/Hamster';

interface HeaderProps {
  levelIndex: number;
  levelNames: string[];
}

const Header: React.FC<HeaderProps> = ({ levelIndex, levelNames }) => {
  return (
    <div className="px-4 z-10">
      <div className="flex items-center space-x-2 pt-4">
        <div className="p-1 rounded-lg bg-[#1d2025]">
          <Hamster size={24} className="text-[#d4d4d4]" />
        </div>
        <div className="flex-col">
          <p className="text-base">Nikandr (CEO)</p>
          <div className="flex-col">
            <a className="text-sm">{levelNames[levelIndex]}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;