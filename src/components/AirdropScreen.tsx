import React from "react";
import Image from "next/image";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Profile from "@/assets/characters/16.webp";

const AirdropScreen: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      className="min-h-screen text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex items-center p-4" variants={itemVariants}>
        <div className="relative">
          <Image
            src={Profile}
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full"
          />
          <motion.div
            className="absolute bottom-0 right-0 bg-yellow-400 text-black text-xs font-bold px-1 rounded"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
          >
            Lv. 5
          </motion.div>
        </div>
        <motion.div
          className="ml-2 bg-yellow-400 h-1 w-12 rounded overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="bg-white h-full rounded"
            initial={{ width: 0 }}
            animate={{ width: "41.67%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.main className="p-4" variants={itemVariants}>
        <motion.h2
          className="text-3xl font-bold text-primary mb-4"
          variants={itemVariants}
        >
          Airdrop
        </motion.h2>

        {/* Task Card */}
        <motion.div
          className="bg-[#2a3655] rounded-lg p-4 mb-4"
          variants={itemVariants}
        >
          <h3 className="text-xl mb-4">Task for participating in Airdrop</h3>
          <motion.div
            className="flex items-center mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            <span className="text-lg">Connect Wallet</span>
          </motion.div>
          <motion.div
            className="bg-[#1e2746] rounded-full py-2 px-4 flex justify-between items-center mb-4"
            whileTap={{ scale: 0.95 }}
          >
            <span>UQCgX....j_zvc</span>
            <ChevronLeft className="w-4 h-4 transform rotate-180" />
          </motion.div>
          <div className="mb-4">
            <span className="text-lg">2. Send transaction</span>
          </div>
          <motion.button
            className="bg-blue-500 text-white rounded-full py-2 px-4 w-full flex items-center justify-center"
            whileTap={{ scale: 0.95, backgroundColor: "#3b82f6" }}
          >
            <span className="mr-2">◊</span>
            Make a TON transaction
            <ChevronLeft className="w-4 h-4 transform rotate-180 ml-2" />
          </motion.button>
          <p className="text-sm text-gray-400 mt-2">
            *If you have already sent a transaction, go to the quest and click
            «Check Action» there. Open Quest
          </p>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="bg-yellow-400 text-black rounded-lg p-3 mb-4"
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-semibold">
            Instructions on how to connect a wallet
          </span>
        </motion.div>

        {/* Description */}
        <motion.p className="text-sm mb-4" variants={itemVariants}>
          An airdrop is the distribution of tokens to players wallets. These
          tokens will be traded on top exchanges, and you can either sell or
          hold them. To receive your tokens, you must connect your wallet.
        </motion.p>
        <motion.p className="text-sm" variants={itemVariants}>
          Currently, we are in the mining stage, where all players are
          developing their characters to earn more tokens for the airdrop. The
          planned date for the airdrop is late September to early October.
        </motion.p>
      </motion.main>
    </motion.div>
  );
};

export default AirdropScreen;
