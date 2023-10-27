"use client";

import VacancyCard from "@/components/VacancyCard";
import { motion } from "framer-motion";

const Vacancies = () => {
  const data = [
    {
      title: "Senior FullStack Engineer",
      description: [
        "Full-time position",
        "Berlin or remote",
        "$65-85k, 0.5-1.50% equity share options",
      ],
    },
    {
      title: "Senior Designer",
      description: [
        "Full-time position",
        "Berlin or remote",
        "$40-55k, 0.25-0.50% equity share options",
      ],
    },
    {
      title: "Superstar Intern",
      description: [
        "Full-time position",
        "Berlin or remote",
        "$20-24k, 0.5-1.50% equity share options",
      ],
    },
  ];

  return (
    <div className="pt-6 px-10 flex flex-col rounded-3xl text-black w-full h-full">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-5xl font-bold py-10"
      >
        Open Vacancies
      </motion.div>
      <div className="flex flex-wrap justify-between gap-5">
        {data.map((item, i) => (
          <VacancyCard
            key={i}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
