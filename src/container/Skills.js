"use client";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="rounded-3xl px-8 py-8 gap-2 flex flex-col justify-between items-center bg-yellow-100 text-black w-full h-[650px]">
      {/* Header */}
      <div className="text-center">
        <p className="font-bold text-lg">
          Let your friends, family, and co-workers(anonymously) rate your skills
        </p>
        <h1 className="font-bold text-4xl">
          Ever wondered what others think of you?
        </h1>
      </div>

      {/* Steps */}
      <div className="flex items-center gap-6 w-full">
        <div className="relative w-full">
          <div className="absolute border-2 border-black border-dashed w-full" />
        </div>
        <motion.img
          whileInView={{ x: 0, opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="w-12 h-12"
          src="https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469741-inky.png"
        />
      </div>

      {/* Card */}
      <div></div>
    </div>
  );
};

export default Skills;
