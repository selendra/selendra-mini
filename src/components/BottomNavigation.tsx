import React from 'react';
import Link from 'next/link';
import { binanceLogo, hamsterCoin } from '@/images';
import Mine from '@/icons/Mine';
import Friends from '@/icons/Friends';
import Coins from '@/icons/Coins';
import { useActivePath } from '@/hooks/useActivePath';
import riseCoin from '@/assets/rise-coin.png';
import Image from 'next/image';

const BottomNavigation: React.FC = () => {
  
  const activePath = useActivePath();

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
      <NavItem 
        icon={<Image src={binanceLogo.src} alt="Exchange" width={32} height={32} className="w-8 h-8 mx-auto" />} 
        label="Exchange" 
        href="/"
        active={activePath === '/'} 
      />
      <NavItem 
        icon={<Mine className="w-8 h-8 mx-auto" />} 
        label="Mine" 
        href="/mine"
        active={activePath === '/mine'} 
      />
      <NavItem 
        icon={<Friends className="w-8 h-8 mx-auto" />} 
        label="Friends" 
        href="/friends"
        active={activePath === '/friends'} 
      />
      <NavItem 
        icon={<Coins className="w-8 h-8 mx-auto" />} 
        label="Earn" 
        href="/earn"
        active={activePath === '/earn'} 
      />
      <NavItem 
        icon={<Image src={riseCoin.src} alt="Airdrop" width={32} height={32} className="w-8 h-8 mx-auto" />} 
        label="Airdrop" 
        href="/airdrop"
        active={activePath === '/airdrop'} 
      />
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, active }) => {
  return (
    <Link className='w-1/5' href={href} passHref>
      <div className={`text-center text-[#85827d] ${active ? 'bg-[#1c1f24] m-1 p-2 rounded-2xl' : ''}`}>
        {icon}
        <p className="mt-1">{label}</p>
      </div>
    </Link>
  );
};

export default BottomNavigation;