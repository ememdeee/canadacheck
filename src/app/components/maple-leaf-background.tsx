'use client'

import { motion } from 'framer-motion'

export function MapleLeafBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-100"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: [0, 0.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🍁
        </motion.div>
      ))}
    </div>
  )
}

