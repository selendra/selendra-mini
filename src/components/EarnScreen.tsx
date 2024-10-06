"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Task from "./Task";
import riseCoin from "@/assets/rise-coin.png";

export default function EarnScreen({
  totalPoints,
  updatePoints,
}: {
  totalPoints: number;
  updatePoints: (points: number) => void;
}) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleTaskCompletion = (taskId: string, points: number) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);
      updatePoints(points);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col h-full p-4 space-y-4"
    >
      <motion.div
        className="bg-primary-50 p-4 rounded-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative mb-4">
          <Image
            src={riseCoin}
            alt="Rise Coin"
            width={120}
            height={120}
            className="w-24 h-24 mx-auto relative z-10 drop-shadow-xl"
          />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">
          Earn more Rise
        </h3>
        <p className="text-white text-opacity-90 mb-4">
          Complete tasks and invite friends to maximize your earnings!
        </p>
      </motion.div>

      <div className="bg-[#272a2f] p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2 text-white">Mission Point</h2>
        <div className="flex items-center">
          <Image
            src={riseCoin}
            alt="Coin"
            width={20}
            height={20}
            className="w-6 h-6 mr-2"
          />
          <span className="text-2xl font-bold text-white">
            {totalPoints} SP
          </span>
        </div>
      </div>

      <div className="space-y-4 pb-5">
        {/* <Task
          id="daily-check-in"
          title="Check in once a day"
          points={300}
          isCompleted={completedTasks.includes("daily-check-in")}
          onComplete={() => handleTaskCompletion("daily-check-in", 300)}
          isRepeatable={true}
          instantComplete={true}
        /> */}
        <Task
          id="introduce-sel"
          title="Introducing the SEL Token!"
          points={1000}
          isCompleted={completedTasks.includes("introduce-sel")}
          onComplete={() => handleTaskCompletion("introduce-sel", 1000)}
          actionLabel="Start"
          externalLink="https://www.selendra.org"
        />
        <Task
          id="follow-selendra-x-account"
          title="Follow Selendra's X Account"
          points={1000}
          isCompleted={completedTasks.includes("follow-selendra-x-account")}
          onComplete={() =>
            handleTaskCompletion("follow-selendra-x-account", 1000)
          }
          actionLabel="Follow"
          externalLink="https://x.com/selendranetwork"
        />
        <Task
          id="follow-stadiumx-x-account"
          title="Follow StadiumX's X Account"
          points={1000}
          isCompleted={completedTasks.includes("follow-stadiumx-x-account")}
          onComplete={() =>
            handleTaskCompletion("follow-stadiumx-x-account", 1000)
          }
          actionLabel="Follow"
          externalLink="https://x.com/stadiumxasia"
        />
        <Task
          id="join-selendra-telegram-channel"
          title="Join Selendra's Telegram Channel"
          points={1000}
          isCompleted={completedTasks.includes(
            "join-selendra-telegram-channel"
          )}
          onComplete={() =>
            handleTaskCompletion("join-selendra-telegram-channel", 1000)
          }
          actionLabel="Join"
          externalLink="https://t.me/selendranetwork"
        />
        <Task
          id="join-stadiumx-telegram-channel"
          title="Join StadiumX's Telegram Channel"
          points={1000}
          isCompleted={completedTasks.includes(
            "join-stadiumx-telegram-channel"
          )}
          onComplete={() =>
            handleTaskCompletion("join-stadiumx-telegram-channel", 1000)
          }
          actionLabel="Join"
          externalLink="https://t.me/stadiumxasia"
        />
        <Task
          id="join-stadiumx-telegram-channel"
          title="Join StadiumX's Telegram Channel"
          points={1000}
          isCompleted={completedTasks.includes(
            "join-stadiumx-telegram-channel"
          )}
          onComplete={() =>
            handleTaskCompletion("join-stadiumx-telegram-channel", 1000)
          }
          actionLabel="Join"
          externalLink="https://t.me/stadiumxasia"
        />
        <Task
          id="join-isi-telegram-channel"
          title="Join ISIDSCFC's Telegram Channel"
          points={1000}
          isCompleted={completedTasks.includes("join-isi-telegram-channel")}
          onComplete={() =>
            handleTaskCompletion("join-isi-telegram-channel", 1000)
          }
          actionLabel="Join"
          externalLink="https://t.me/+SMp99gsREh5hYTVl"
        />
        <Task
          id="join-mifa-telegram-channel"
          title="Join MIFA's Telegram Channel"
          points={1000}
          isCompleted={completedTasks.includes("join-mifa-telegram-channel")}
          onComplete={() =>
            handleTaskCompletion("join-mifa-telegram-channel", 1000)
          }
          actionLabel="Join"
          externalLink="https://t.me/Mifacambodia"
        />
        <Task
          id="visit-isi-website"
          title="Visit ISI DSC FC Website"
          points={1000}
          isCompleted={completedTasks.includes("visit-isi-website")}
          onComplete={() => handleTaskCompletion("visit-isi-website", 1000)}
          actionLabel="Visit"
          externalLink="https://dangkorsenchey.com/kh"
        />
        <Task
          id="visit-mifa-website"
          title="Visit MIFA Website"
          points={1000}
          isCompleted={completedTasks.includes("visit-mifa-website")}
          onComplete={() => handleTaskCompletion("visit-mifa-website", 1000)}
          actionLabel="Visit"
          externalLink="https://mifa.stadiumx.org/kh"
        />
        <Task
          id="visit-ppcfc-website"
          title="Visit PPCFC Website"
          points={1000}
          isCompleted={completedTasks.includes("visit-ppcfc-website")}
          onComplete={() => handleTaskCompletion("visit-ppcfc-website", 1000)}
          actionLabel="Visit"
          externalLink="https://ppcfc.com/kh"
        />
      </div>
    </motion.div>
  );
}
