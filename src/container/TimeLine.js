"use client";

import LiIcon from "@/components/LiIcon";
import { motion, useScroll } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const TimeLine = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end, center start"],
  });

  return (
    <div className="rounded-3xl bg-slate-100 px-8 py-10 text-black h-[700px]">
      {/* Heading */}
      <div className="pb-6">
        <p className="text-md">
          Wrong with self-improvement & how we're fixing it.
        </p>
        <h1 className="text-3xl">Self-improvement. Ugh.</h1>
      </div>

      {/* TimeLine */}
      <div ref={ref} className="relative mx-auto w-[75%] h-full">
        {/* Bar */}
        <motion.div className="absolute left-9 top-0 w-[4px] h-full border-2 border-black bg-black origin-top" />
        {/* Cards */}
        <ul className="w-full h-full flex flex-col items-start justify-between">
          <Details />
          <Details />
          <Details />
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;

const Details = () => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3>Hello</h3>
        <p>
          Wrong with self-improvement & how we're fixing it. Self-improvement.
          Ugh.
        </p>
        <p>
          Wrong with self-improvement & how we're fixing it. Self-improvement.
          Ugh.
        </p>
      </motion.div>
    </li>
  );
};
