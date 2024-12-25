import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <motion.div className="flex gap-2">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-3 h-3 rounded-full bg-white"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-3 h-3 rounded-full bg-white"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-3 h-3 rounded-full bg-white"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
