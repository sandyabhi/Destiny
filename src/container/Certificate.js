"use client";

import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <>
      <div className="rounded-3xl bg-white text-black flex flex-col justify-center h-[650px]">
        <div className="px-10 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center pb-10">
            <p className="text-base pb-2">We take privacy seriously</p>
            <p className="text-3xl font-bold pb-4">Before you get started</p>
            <p className="text-xl">
              &quot;We won&apos;t share your answers with anyone (and won&apos;t
              ever tell you which friends said what about you)&quot;
            </p>
            <span className="py-6">
              with love,{" "}
              <motion.span
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              >
                Sandeep
              </motion.span>
            </span>
          </div>

          <motion.div
            whileInView={{
              y: [0, -10],
              scale: [0, 1],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <button className="bg-black text-white px-4 py-2 rounded-3xl">
              Star a test
            </button>
          </motion.div>
          <div className="py-6">
            <p className="text-sm">Take only 5 minutes</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
