"use client";

import { motion } from "framer-motion";

const WorkWIthUs = () => {
  return (
    <div className="pt-6 px-8 flex flex-row justify-between rounded-3xl bg-violet-100 text-black h-[650px]">
      <div className="px-4 h-[600px] w-[45%] flex flex-col">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-[48px] pb-4"
        >
          Work with us
        </motion.div>

        <div className="bg-white">
          <div className="px-6 pt-6">
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-12 h-12"
              src="https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469740-blinky.png"
            />
          </div>

          <div className="p-6">
            <h2> About</h2>
            <p>
              At ahead our goal is to make self-improvement dun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>

          <div className="bg-orange-50 p-6">
            <h2>About</h2>
            <p>
              At ahead our goal is to make self-improvement dun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}

      <div className="px-4 h-[600px] flex flex-col items-end">
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-[48px] pb-4 text-blue-600 text-right"
        >
          ahead
        </motion.div>
        {/* Cards */}
        <div className="flex flex-col gap-4 overflow-y-scroll">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default WorkWIthUs;

const Card = () => {
  return (
    <div className="p-6 bg-white rounded-2xl w-[350px]">
      <p className="font-bold">Power through, even when the going gets tough</p>
      <p>
        We help you spot and work around whatever stands in the way, be it bad
        habits, fears, etc
      </p>
    </div>
  );
};
