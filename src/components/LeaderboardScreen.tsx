import { motion } from 'framer-motion'

export default function LeaderboardScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="p-4 space-y-4"
    >
      <h2 className="text-2xl font-bold">Selendra Mini Leaderboard</h2>
      <p>This screen is not yet implemented.</p>
    </motion.div>
  )
}