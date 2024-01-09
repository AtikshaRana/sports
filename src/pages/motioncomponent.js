import React from "react";
import { motion } from 'framer-motion';
const MotionComponent = ({ children }) => {
  const animationProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 2 }
  };

  return (
    <motion.div
      {...animationProps}
    >
      {children}
    </motion.div>
  );
}

export default MotionComponent;
