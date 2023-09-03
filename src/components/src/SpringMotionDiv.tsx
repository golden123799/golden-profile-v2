import { motion } from "framer-motion";
import React from "react";

interface SpringMotionDivProps {
  children: React.ReactNode;
  delay?: number;
  direction: "left" | "right" | "up" | "down";
  duration?: number;
  whileInView?: boolean;
}

const SpringMotionDiv: React.FC<SpringMotionDivProps> = ({
  children,
  delay,
  direction,
  duration = 2,
  whileInView = true,
}) => {
  if (whileInView) {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {
            opacity: 0,
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
          },
          show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: delay,
              duration: duration,
              type: "spring",
              stiffness: 100,
            },
          },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          opacity: 0,
          x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
          y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            delay: delay,
            duration: duration,
            type: "spring",
            stiffness: 100,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SpringMotionDiv;
