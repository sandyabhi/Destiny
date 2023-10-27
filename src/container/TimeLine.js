"use client";

import LiIcon from "@/components/LiIcon";
import TimeLineCard from "@/components/TimeLineCard";
import { motion, useScroll } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const TimeLine = () => {
  const data = [
    {
      title: "It's not as easy as 1-2-3.",
      description:
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know(and nothing else).",
    },
    {
      title: "Old habits are hard to break.",
      description:
        "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.",
    },
    {
      title: "You and your motivation don't have a long-term relationship.",
      description:
        "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.",
    },
    {
      title: "Books just don't offer practical.",
      description:
        "Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",
    },
    {
      title: "Inspiration is great, but then what.",
      description:
        "We make sure your energy from all the content you consume does not fizzle out.",
    },
  ];

  return (
    <div className="rounded-3xl px-8 pt-10 pb-20 text-black h-[750px]">
      {/* Heading */}
      <motion.div
        whileInView={{
          x: [-100, 0],
          y: [30, 0],
          scale: [0, 1],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="pb-14"
      >
        <p className="text-md">
          Wrong with self-improvement & how we&apos;re fixing it.
        </p>
        <h1 className="text-3xl">Self-improvement. Ugh.</h1>
      </motion.div>

      {/* TL */}
      <div className="relative h-full">
        <motion.div className="absolute left-20 h-[80%] border-2 border-indigo-500" />
        <ul className="w-full h-[80%] flex flex-col items-start justify-between">
          {data.map((item, i) => (
            <TimeLineCard
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
