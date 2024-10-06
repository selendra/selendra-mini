import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import mainCharacter from '@/assets/characters/16.webp';

interface MainCharacterProps {
  onClick: (e: React.TouchEvent<HTMLDivElement>) => void;
}

const MainCharacter: React.FC<MainCharacterProps> = ({ onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTouch = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      // Handle multiple touches
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        const x = touch.clientX - rect.left - rect.width / 2;
        const y = touch.clientY - rect.top - rect.height / 2;

        card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;

        // Reset the transformation after a short delay
        setTimeout(() => {
          card.style.transform = '';
        }, 100);
      }
    }
    onClick(e); // Trigger the onClick event to add points
  }, [onClick]);

  return (
    <div className="px-4 mt-4 flex justify-center">
      <div
        ref={cardRef}
        className="w-80 h-80 p-4 rounded-full circle-outer cursor-pointer transition-transform duration-100"
        onTouchStart={handleTouch} // Handle touch events
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