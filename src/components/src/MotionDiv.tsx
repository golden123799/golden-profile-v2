import { motion } from "framer-motion";
import React from "react";

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  from?: number;
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  delay,
  from = -150,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: from }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
        duration: 2,
        type: "spring",
        stiffness: 80,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
