import React from 'react';
import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', className: 'rounded-full' },
  { type: 'square', className: 'rounded-lg rotate-45' },
  { type: 'triangle', className: 'clip-triangle' }
];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white to-gray-50">
      {[...Array(12)].map((_, i) => {
        const shape = shapes[i % shapes.length];
        return (
          <motion.div
            key={i}
            className={`absolute ${shape.className} bg-[#FF0099] mix-blend-soft-light`}
            style={{
              width: Math.random() * 60 + 40,
              height: Math.random() * 60 + 40,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.03,
              rotate: 0
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0.02, 0.04, 0.02],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
}