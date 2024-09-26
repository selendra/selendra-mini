import { motion } from 'framer-motion'
import Image from 'next/image'
import { User } from 'lucide-react'

export default function MainScreen({ totalPoints }: { totalPoints: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="p-4 space-y-4"
    >
      <div className="bg-primary/50 p-4 rounded-lg">
        <Image src={require("@/assets/banner-airdrop.png")} alt="Selendra Airdrop" width={200} height={100} className="w-full mb-4" />
        <h2 className="text-xl font-bold mb-2 text-white">Invite Friends with Selendra mini & Earn SEL</h2>
        <p className="text-sm text-white">Invite more friends to earn more SEL</p>
        <p className="text-sm text-white">2024.08.23 - 09.30</p>
      </div>

      <motion.div 
        className="bg-primary-50 p-4 rounded-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Image src="https://img.icons8.com/arcade/64/trophy.png" alt="Trophy" width={50} height={50} className="w-12 h-12 mx-auto mb-2" />
        <h3 className="text-lg font-bold mb-2">Earn 10% of the Points your friend earns as a Referral Bonus</h3>
        <button className="bg-primary text-white font-semibold py-2 px-4 rounded-full mt-2">
          Invite Friends with Selendra Mini!
        </button>
      </motion.div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Total Point</h3>
        <div className="flex items-center">
          <Image src={require("@/assets/rise-coin.png")} alt="Coin" width={24} height={24} className="w-6 h-6 mr-2" />
          <span className="text-2xl font-bold">{totalPoints} SP</span>
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">My Referrals</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Point</p>
            <div className="flex items-center">
              <Image src={require("@/assets/rise-coin.png")} alt="Coin" width={16} height={16} className="w-4 h-4 mr-1" />
              <span className="font-semibold">{totalPoints} SP</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Referrals</p>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1 text-green-500" />
              <span className="font-semibold">0</span>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-primary text-white font-semibold py-2 px-4 rounded-full w-full">
        Go to Bitriel Wallet
      </button>
    </motion.div>
  )
}