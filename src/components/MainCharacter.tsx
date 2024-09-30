import React, { useCallback, useRef } from 'react';
import mainCharacter from '@/assets/characters/16.webp';
import Image from 'next/image';

interface MainCharacterProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const MainCharacter: React.FC<MainCharacterProps> = ({ onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
      setTimeout(() => {
        card.style.transform = '';
      }, 100);
    }
    onClick(e);
  }, [onClick]);

  return (
    <div className="px-4 mt-4 flex justify-center">
      <div
        ref={cardRef}
        className="w-80 h-80 p-4 rounded-full circle-outer cursor-pointer transition-transform duration-100"
        onClick={handleClick}
      >
        <div className="w-full h-full rounded-full circle-inner relative">
          <Image 
            src={mainCharacter.src} 
            alt="Main Character" 
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCharacter;