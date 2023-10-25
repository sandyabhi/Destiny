"use client";

import { motion } from "framer-motion";

const Thi = () => {
  return (
    <div className="rounded-3xl px-8 gap-2 flex flex-row justify-between bg-yellow-100 text-black w-full h-[650px]">
      <div className="w-[50%] px-4 font-bold flex flex-col justify-center items-center">
        <motion.div
          whileInView={{ x: [-5, 0], y: [5, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="pb-10"
        >
          <p className="text-sm">Built out of frustration</p>
          <p className="text-3xl">Meet the ahead app</p>
        </motion.div>

        <motion.div
          whileInView={{ x: [-50, 0], y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="bg-white py-12 w-44 h-44 rounded-full flex items-center justify-center"
        >
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-20 h-20"
            src="https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469740-blinky.png"
          />
        </motion.div>
        {/* <img
          className=""
          src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/53969/purple-circle-emoji-clipart-xl.png"
        /> */}
      </div>
      <motion.div
        whileInView={{ x: [-5, 0], y: [5, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="w-[50%] px-4 flex justify-center items-center"
      >
        <div>
          <p className="text-base">
            A personalized pocket coach that provides bite-sized ,
            science-driven tools to boost emotional intelligence.
          </p>
          <p className="text-base">
            Think of it as a pocket cheerleader towards a better, more
            fulfilling
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Thi;
