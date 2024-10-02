import React, { useState } from 'react'
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
  externalLink?: string // External link for tasks that require going outside the app
  instantComplete?: boolean // New prop to instantly complete task
}

const Task: React.FC<TaskProps> = ({
  id,
  title,
  points,
  isCompleted,
  onComplete,
  isRepeatable = false,
  actionLabel = 'Complete',
  externalLink,
  instantComplete = false // Defaults to false, meaning task will wait for external link actions
}) => {
  const [loading, setLoading] = useState(false)

  const handleTaskClick = async () => {
    if (loading || (isCompleted && !isRepeatable)) {
      return
    }

    // Handle instant completion
    if (instantComplete) {
      onComplete() // Call parent to mark task as complete
      return
    }

    if (externalLink) {
      // Open external link in a new tab
      window.open(externalLink, '_blank')

      // Simulate waiting for user action
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 6000)) // Simulate a delay for completion
      setLoading(false)

      // Complete the task after delay
      onComplete()
    } else {
      onComplete() // Complete directly if no external link
    }
  }

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
        onClick={handleTaskClick}
        disabled={loading || (isCompleted && !isRepeatable)}
        className={`px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center ${
          loading || (isCompleted && !isRepeatable)
            ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary-dark'
        }`}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
        ) : (
          isCompleted ? (isRepeatable ? actionLabel : 'Completed') : actionLabel
        )}
      </button>
    </div>
  )
}

export default Task