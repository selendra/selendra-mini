import React from 'react'
import Image from 'next/image'
import riseCoin from '@/assets/rise-coin.png'

interface TaskProps {
  id: string
  title: string
  points: number
  isCompleted: boolean
  onComplete: () => void
  isRepeatable?: boolean
  actionLabel?: string
}

const Task: React.FC<TaskProps> = ({
  title,
  points,
  isCompleted,
  onComplete,
  isRepeatable = false,
  actionLabel = 'Complete'
}) => {
  return (
    <div className="bg-[#272a2f] p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <div className="flex items-center">
          <Image src={riseCoin} alt="Coin" width={16} height={16} className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium text-gray-300">{points} SP</span>
        </div>
      </div>
      <button
        onClick={onComplete}
        disabled={isCompleted && !isRepeatable}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          isCompleted
            ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary-dark'
        }`}
      >
        {isCompleted ? (isRepeatable ? actionLabel : 'Completed') : actionLabel}
      </button>
    </div>
  )
}

export default Task