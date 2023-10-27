"use client";

import WorkCard from "@/components/WorkCard";
import { motion } from "framer-motion";

const WorkWIthUs = () => {
  const data = [
    {
      title: "Power through, even when the going gets tough",
      description:
        "We help you spot and work around whatever stands int the way, be it bad habits, fears, etc.",
    },
    {
      title: "Learn more about who you are and where you want to go",
      description:
        "we ask the right questions to help you better understand why you do things the way you do.",
    },
    {
      title: "Play and grow together with others on the same journey",
      description:
        "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!",
    },
    {
      title: "Master how to make it happen in real life",
      description:
        "We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards.",
    },
    {
      title:
        "Learn about practical skills that you can actually use in real life",
      description:
        "We teach you smart psychological techniques and habit-forming strategies that are easy to apply.",
    },
    {
      title: "Get support that's made for your needs",
      description:
        "We build your personal roadmap of lessons and actions towards your goal",
    },
  ];

  return (
    <div className="pt-6 px-8 flex flex-row justify-between rounded-3xl bg-violet-100 text-black h-[650px]">
      <div className="px-4 h-[600px] w-[400px] flex flex-col">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-3xl font-bold pb-4"
        >
          Work with us
        </motion.div>

        <div className="bg-white">
          <div className="px-6 pt-6">
            <motion.img
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7, ease: "easeInOut", type: "spring" }}
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
            <h2>Product</h2>
            <p>
              Sure, you could spend ages reading books or sitting in seminars on
              how to become a better spouse, parent, or manager-like we did...
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}

      <div className="px-4 w-[400px] h-[600px] flex flex-col items-end">
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-3xl font-bold pb-4 text-blue-600 text-right"
        >
          ahead
        </motion.div>
        {/* Cards */}
        <div className="flex flex-col gap-4 overflow-y-scroll">
          {data.map((item, i) => (
            <WorkCard
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkWIthUs;
