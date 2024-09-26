'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Task from './Task'

import riseCoin from '@/assets/rise-coin.png'

export default function MissionScreen({ totalPoints, updatePoints }: { totalPoints: number, updatePoints: (points: number) => void }) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([])

  const handleTaskCompletion = (taskId: string, points: number) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId])
      updatePoints(points)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="p-4 space-y-4"
    >
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Mission Point</h2>
        <div className="flex items-center">
        <Image src={riseCoin} alt="Coin" width={20} height={20} className="w-6 h-6 mr-2" />
          <span className="text-2xl font-bold">{totalPoints} SP</span>
        </div>
      </div>

      <div className="space-y-4">
        <Task
          id="daily-check-in"
          title="Check in once a day"
          points={300}
          isCompleted={completedTasks.includes('daily-check-in')}
          onComplete={() => handleTaskCompletion('daily-check-in', 300)}
          isRepeatable={true}
        />
        <Task
          id="invite-friends"
          title="Invite friends to join Selendra Mini"
          points={1000}
          isCompleted={completedTasks.includes('invite-friends')}
          onComplete={() => handleTaskCompletion('invite-friends', 1000)}
          actionLabel="Invite"
        />
        <Task
          id="introduce-sel"
          title="Introducing the SEL Token!"
          points={1000}
          isCompleted={completedTasks.includes('introduce-sel')}
          onComplete={() => handleTaskCompletion('introduce-sel', 1000)}
        />
        <Task
          id="follow-kay"
          title="Follow Kay's X account"
          points={1000}
          isCompleted={completedTasks.includes('follow-kay')}
          onComplete={() => handleTaskCompletion('follow-kay', 1000)}
        />
        <Task
          id="retweet-kay"
          title={'Retweet "Kay x Lark Davis" on Kay\'s X'}
          points={1000}
          isCompleted={completedTasks.includes('retweet-kay')}
          onComplete={() => handleTaskCompletion('retweet-kay', 1000)}
        />
      </div>
    </motion.div>
  )
}