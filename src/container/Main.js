"use client";

import { motion, useInView } from "framer-motion";

const Main = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="rounded-3xl bg-violet-100 text-black gap-2 flex flex-row px-8 pb-10 h-[650px] items-center">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="flex flex-col w-[50%] gap-4 justify-center relative"
        >
          <p className="font-semibold">Ahead app</p>
          <span>
            <p className="text-6xl font-bold">
              Master your life by mastering emotions
            </p>
          </span>
          <span className="flex justify-center items-center">
            <img className="w-36 h-10" src="/assets/appleStore.jpg" />
            <img className="w-36 h-20" src="/assets/5-star.webp" />
          </span>

          <motion.img
            whileInView={{ x: [100, 0], y: [100, 0], size: [0, 1] }}
            transition={{ duration: 1 }}
            className="absolute animate-pulse -top-20 right-0 w-14 h-14"
            src="assets/pink-circle.webp"
          />
          <motion.img
            whileInView={{ rotate: 360, size: [0, 1] }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-10 w-10 h-10"
            src="assets/leaf.png"
          />
          <motion.img
            whileInView={{ rotate: 360, size: [0, 1] }}
            transition={{ duration: 1 }}
            className="absolute -bottom-14 left-20 w-10 h-10"
            src="assets/leaf.png"
          />

          <motion.div
            whileInView={{ x: [100, 0], y: [100, 0], size: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="absolute top-10 -right-10 w-4 h-4 rounded-full animate-pulse bg-pink-300 border-2 border-pink-500"
          />
          <motion.div
            whileInView={{ x: [100, 0], y: [100, 0], size: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="absolute -bottom-20 left-0 w-4 h-4 rounded-full animate-pulse bg-violet-300 border-2 border-violet-500"
          />
          <motion.div
            whileInView={{ x: [100, 0], y: [100, 0], size: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="absolute -bottom-10 left-10 w-8 h-8 rounded-full animate-pulse bg-orange-300 border-2 border-orange-500"
          />
        </motion.div>

        {/* right side */}
        <div className="relative w-full flex justify-center">
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="relative w-96 h-96 rounded-full border-white border-dashed border-4"
          >
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-16 left-14 w-64 h-64 margin-top: auto margin-left: auto z-0"
              src="/assets/purple-circle.png"
            />
            <img
              className="top-16 left-14 absolute w-64 h-60 margin-top: auto margin-left: auto z-10"
              src="assets/phone.png"
            />
          </motion.div>

          <>
            <motion.div
              className="relative"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.img
                whileInView={{ x: [-100, -300], y: [100, 0], scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-12 h-12"
                src="/assets/redinky.png"
                alt="red-inky"
              />
              <motion.img
                whileInView={{
                  x: [-100, -300],
                  y: [100, 0],
                  scale: [0, 1],
                  rotate: -90,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute -right-32 top-2 w-4 h-4"
                src="/assets/redinky.png"
                alt="red-inky"
              />

              <motion.img
                whileInView={{ x: [100, 0], y: [100, 0], scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="right-6 top-24 absolute w-12 h-12"
                src="/assets/blue-inky.png"
              />
              <motion.img
                whileInView={{
                  x: [100, 0],
                  y: [100, 0],
                  scale: [0, 1],
                  rotate: -90,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="-left-28 bottom-4 absolute w-4 h-4"
                src="/assets/blue-inky.png"
              />

              <motion.img
                whileInView={{ x: [100, 0], y: [100, 0], scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="-left-80 bottom-0 absolute w-12 h-12"
                src="/assets/orange-inky.png"
              />
              <motion.img
                whileInView={{
                  x: [100, 0],
                  y: [100, 0],
                  scale: [0, 1],
                  rotate: -90,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="-left-96 top-36 absolute w-4 h-4"
                src="/assets/orange-inky.png"
              />
            </motion.div>
          </>
          <motion.div
            whileInView={{ x: [100, 0], y: [100, 0], size: [0, 1] }}
            transition={{ duration: 1 }}
            className="absolute -bottom-20 right-10 w-8 h-8 rounded-full animate-pulse bg-orange-300 border-2 border-orange-500"
          />
          <motion.img
            whileInView={{ rotate: 360, size: [0, 1] }}
            transition={{ duration: 1 }}
            className="absolute -top-20 right-0 w-10 h-10"
            src="assets/flower.png"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
