"use client";

import { motion, useInView } from "framer-motion";
import { useState } from "react";

const Main = () => {
  // const { inView } = useInView();
  // const pathCircleVariants = {
  //   from: {
  //     opacity: 0,
  //     pathLength: 0,
  //   },
  //   to: {
  //     opacity: 1,
  //     pathLength: 1,
  //     transition: {
  //       duration: 0.7,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

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

  // const motionImgVariants = {
  //   initial: {
  //     opacity: 1,
  //     scale: 1,
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  // };

  return (
    <>
      <div className="rounded-3xl bg-violet-100 text-black gap-2 flex flex-row px-8 pb-10 h-[650px] items-center">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="flex flex-col w-[50%] gap-4 justify-center"
        >
          <p>Ahead app</p>
          <span>
            <p className="text-6xl font-bold">
              Master your life by mastering emotions
            </p>
          </span>
          <span className="flex justify-center items-center">
            <img
              className="w-30 h-10"
              src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo-640x221.jpg"
            />
            <img
              className="w-36 h-20"
              src="https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
            />
          </span>
        </motion.div>

        {/* right side */}
        <div className="relative w-full flex justify-center">
          {/* <motion.div
            className="w-12 h-12"
            // src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo-640x221.jpg"
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.5 },
            }}
            style={{ opacity: inView ? 0 : 1 }}
          /> */}

          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="relative w-96 h-96 rounded-full border-white border-dashed border-4"
          >
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-16 left-14 w-64 h-64 margin-top: auto margin-left: auto z-0"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/53969/purple-circle-emoji-clipart-xl.png"
            />
            <img
              className="top-16 left-24 absolute w-44 h-64 margin-top: auto margin-left: auto z-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSpr9rlZaQ17_HcAF0sBjmQqO91oJMDePaTKUA5Q&s"
            />
          </motion.div>

          <>
            <motion.div
              className="relative"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.img
                whileInView={{ x: [-100, -300], scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-12 h-12"
                src="https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469740-blinky.png"
              />
              <motion.img
                whileInView={{ x: [100, 0], scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="right-6 top-24 absolute w-12 h-12"
                src="https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469741-inky.png"
              />

              {/* <motion.img
                // whileInView={{ scale: [0, 1] }}
                // transition={{ duration: 1, ease: "easeInOut" }}
                className="w-12 h-12"
                src="https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469740-blinky.png"
              /> */}

              <motion.img
                whileInView={{ x: [100, 0], scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{
                //   opacity: 1,
                //   scale: 1,
                //   rotate: 360,
                //   // x: Math.cos(((0 + 1) * Math.PI) / 3) * 100,
                //   // y: Math.sin(((0 + 1) * Math.PI) / 3) * 100,
                // }}
                // transition={{ duration: 1, ease: "easeInOut" }}
                className="-left-80 bottom-0 absolute w-12 h-12"
                src="https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469743-orange.png"
              />
            </motion.div>
          </>
        </div>
        {/* <div className="w-full flex justify-center">
          <div className="relative w-96 h-96 rounded-full border-white border-dashed border-4">
            <img
              className="absolute top-16 left-14 w-64 h-64 margin-top: auto margin-left: auto z-0"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/53969/purple-circle-emoji-clipart-xl.png"
            />
            <img
              className="top-16 left-24 absolute w-44 h-64 margin-top: auto margin-left: auto z-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSpr9rlZaQ17_HcAF0sBjmQqO91oJMDePaTKUA5Q&s"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Main;
