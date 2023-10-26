"use client";

import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end, center center"],
  });

  return (
    <motion.div
      whileInView={{ scale: [0.2, 1.2] }}
      transition={{ scale: [0, 1.2], ease: "easeInOut" }}
      className="absolute left-11 -top-1 stroke-black"
    >
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          className="stroke-pink-400 stroke-1 fill-none"
          cx="78"
          cy="50"
          r="20"
        />
        <motion.circle
          className="stroke-1 fill-blue-400"
          cx="78"
          cy="50"
          r="20"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          className="animate-pulse stroke-1 fill-pink-400"
          cx="78"
          cy="50"
          r="10"
        />
      </svg>
    </motion.div>
  );
};

export default LiIcon;
