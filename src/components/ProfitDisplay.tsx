import React from 'react';
import { formatProfitPerHour } from '@/utils/helpers';
import { binanceLogo } from '@/images';
import riseCoin from '@/assets/rise-coin.png';
import Info from '@/icons/Info';
import Settings from '@/icons/Settings';

interface ProfitDisplayProps {
  profitPerHour: number;
}

const ProfitDisplay: React.FC<ProfitDisplayProps> = ({ profitPerHour }) => {
  return (
    <div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
      <img src={binanceLogo.src} alt="Exchange" className="w-8 h-8" />
      <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
      <div className="flex-1 text-center">
        <p className="text-xs text-[#85827d] font-medium">Profit per hour</p>
        <div className="flex items-center justify-center space-x-1">
          <img src={riseCoin.src} alt="Dollar Coin" className="w-[18px] h-[18px]" />
          <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
          <Info size={20} className="text-[#43433b]" />
        </div>
      </div>
      <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
      <Settings className="text-white" />
    </div>
  );
};

export default ProfitDisplay;