"use client";

import { motion } from "framer-motion";

const Meet = () => {
  return (
    <div className="rounded-3xl px-8 gap-2 flex flex-row justify-between bg-orange-50 text-black w-full h-[650px]">
      <div className="relative w-[50%] px-4 font-bold flex flex-col justify-center items-center">
        <motion.div
          whileInView={{
            x: [-5, 0],
            y: [5, 0],
            scale: [0, 1],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className="pb-10"
        >
          <p className="text-xl">Built out of frustration</p>
          <p className="text-6xl font-bold">Meet the ahead app</p>
        </motion.div>

        <motion.div
          whileInView={{ x: [-100, 0], y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="relative py-12 rounded-full flex items-center justify-center z-20"
        >
          <div className="flex justify-center items-center">
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-36 h-36 z-20 rounded-full"
              src="assets/white-wall.jpg"
            />
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute  w-20 h-20 z-20"
              src="/assets/redinky.png"
            />
            <motion.img
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="top-4 absolute z-30 w-12 h-12 bg-yellow-500 rounded-full"
              src="/assets/star.webp"
            />
          </div>

          <motion.img
            whileInView={{
              x: [100, 0],
              y: [100, 0],
              scale: [0, 1],
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute -left-28 top-16 w-36 h-36 z-10"
            src="/assets/pink-circle.webp"
          />
        </motion.div>

        <motion.img
          whileInView={{ rotate: 360, size: [0, 1] }}
          transition={{ duration: 1 }}
          className="absolute bottom-48 right-6 w-10 h-10"
          src="assets/leaf.png"
        />
        <motion.div
          whileInView={{ x: [100, 0], y: [100, 0], size: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-40 right-16 w-4 h-4 rounded-full animate-pulse bg-violet-300 border-2 border-violet-500"
        />
        <motion.div
          whileInView={{ x: [100, 0], y: [100, 0], size: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-28 right-20 w-8 h-8 rounded-full animate-pulse bg-orange-300 border-2 border-orange-500"
        />
      </div>

      {/* Right side */}
      <motion.div
        whileInView={{ x: [-5, 0], y: [5, 0], scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        className="relative w-[50%] pl-4 pr-12 flex justify-center items-center"
      >
        <div className="text-xl">
          <p>
            A personalized pocket coach that provides bite-sized ,
            science-driven tools to boost emotional intelligence.
          </p>
          <br />
          <p>
            Think of it as a pocket cheerleader towards a better, more
            fulfilling
          </p>
        </div>
        <motion.img
          whileInView={{ rotate: 360, size: [0, 1] }}
          transition={{ duration: 1 }}
          className="absolute right-8 top-20 w-10 h-10"
          src="assets/leaf.png"
        />
        <motion.img
          whileInView={{ rotate: 360, size: [0, 1] }}
          transition={{ duration: 1 }}
          className="right-0 top-5 w-8 h-8 absolute"
          src="assets/flower.png"
        />
      </motion.div>
    </div>
  );
};

export default Meet;
