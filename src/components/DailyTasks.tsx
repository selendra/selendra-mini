import React from 'react';
import { dailyReward, dailyCipher, dailyCombo } from '@/images';

interface DailyTasksProps {
  dailyRewardTimeLeft: string;
  dailyCipherTimeLeft: string;
  dailyComboTimeLeft: string;
}

const DailyTasks: React.FC<DailyTasksProps> = ({ dailyRewardTimeLeft, dailyCipherTimeLeft, dailyComboTimeLeft }) => {
  return (
    <div className="px-4 mt-6 flex justify-between gap-2">
      <DailyTask title="Daily reward" image={dailyReward.src} timeLeft={dailyRewardTimeLeft} />
      <DailyTask title="Daily cipher" image={dailyCipher.src} timeLeft={dailyCipherTimeLeft} />
      <DailyTask title="Daily combo" image={dailyCombo.src} timeLeft={dailyComboTimeLeft} />
    </div>
  );
};

interface DailyTaskProps {
  title: string;
  image: string;
  timeLeft: string;
}

const DailyTask: React.FC<DailyTaskProps> = ({ title, image, timeLeft }) => {
  return (
    <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
      <div className="dot"></div>
      <img src={image} alt={title} className="mx-auto w-12 h-12" />
      <p className="text-[10px] text-center text-white mt-1">{title}</p>
      <p className="text-[10px] font-medium text-center text-gray-400 mt-2">{timeLeft}</p>
    </div>
  );
};

export default DailyTasks;