"use client";

import { easeInOut, motion } from "framer-motion";

const Vacancies = () => {
  return (
    <div className="pt-6 px-8 flex flex-col rounded-3xl text-black h-[450px]">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-5xl font-bold py-10"
      >
        Open Vacancies
      </motion.div>
      <div className="flex justify-center gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Vacancies;

const Card = () => {
  return (
    <div className="p-6 bg-yellow-50 w-80 rounded-3xl">
      <h1 className="text-lg font-bold text-left">
        Senior Full-Stack Engineer
      </h1>
      <div className="flex flex-col items-center gap-2">
        <ul className="list-disc">
          <li>Full-time position</li>
          <li>Berlin or remote</li>
          <li>$65-85k, 0.5-1.50% equity share options</li>
        </ul>

        <button className="px-4 py-2 rounded-full bg-black text-white ">
          See Details
        </button>
      </div>
    </div>
  );
};
