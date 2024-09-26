import { Target, Trophy, LayoutDashboard } from 'lucide-react'

interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around p-4 border-t h-20 bg-white z-10">
      <button onClick={() => setActiveTab('main')} className={`flex flex-col items-center ${activeTab === 'main' ? 'text-blue-500' : 'text-gray-500'}`}>
        <LayoutDashboard className="w-6 h-6" />
        <span className="text-xs mt-1">Main</span>
      </button>
      <button onClick={() => setActiveTab('mission')} className={`flex flex-col items-center ${activeTab === 'mission' ? 'text-blue-500' : 'text-gray-500'}`}>
        <Target className="w-6 h-6" />
        <span className="text-xs mt-1">Mission</span>
      </button>
      <button onClick={() => setActiveTab('leaderboard')} className={`flex flex-col items-center ${activeTab === 'leaderboard' ? 'text-blue-500' : 'text-gray-500'}`}>
        <Trophy className="w-6 h-6" />
        <span className="text-xs mt-1">Leaderboard</span>
      </button>
    </nav>
  )
}