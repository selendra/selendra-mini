'use client';

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import MainScreen from './MainScreen'
import MissionScreen from './MissionScreen'
import LeaderboardScreen from './LeaderboardScreen'

export default function SelendraMiniApp() {
  const [activeTab, setActiveTab] = useState('main')
  const [totalPoints, setTotalPoints] = useState(20200)

  const updatePoints = (points: number) => {
    setTotalPoints(prevPoints => prevPoints + points)
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Pass the activeTab state to the Header */}
      <Header />
      
      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto mt-16 mb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'main' && <MainScreen key="main" totalPoints={totalPoints} />}
          {activeTab === 'mission' && <MissionScreen key="mission" totalPoints={totalPoints} updatePoints={updatePoints} />}
          {activeTab === 'leaderboard' && <LeaderboardScreen key="leaderboard" />}
        </AnimatePresence>
      </main>
      
      {/* Fixed Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}