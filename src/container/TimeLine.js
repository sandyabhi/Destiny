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

      {/* TL */}
      <div className="relative h-full">
        <motion.div className="absolute left-20 h-[80%] border-2 border-indigo-500" />
        <ul className="w-full h-[80%] flex flex-col items-start justify-between">
          <Details />
          <Details />
          <Details />
          <Details />
        </ul>
      </div>

      {/* TimeLine */}
      {/* <div ref={ref} className="relative mx-auto w-[75%] h-full">
    
        <motion.div className="absolute left-9 top-0 w-[4px] h-full border-2 border-black bg-black origin-top" />
      
        <ul className="w-full h-full flex flex-col items-start justify-between">
          <Details />
          <Details />
          <Details />
        </ul>
      </div> */}
    </div>
  );
};

export default TimeLine;

const Details = () => {
  const ref = useRef(null);

  return (
    <li className="relative w-full mr-10">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="ml-28 -top-4 absolute"
      >
        <h3 className="text-lg font-bold mb-2">It's not as easy as 1-2-3</h3>
        <p className="text-md">
          The journey of change may be long, but our sessions are quick. We get
          to the point and tell you what you want to know(and nothing else).
        </p>
      </motion.div>
    </li>
    // <li
    //   ref={ref}
    //   className="my-8 first:mt-0 last:mb-0 w-[60%] flex flex-col items-center justify-between"
    // >
    //   <LiIcon reference={ref} />
    //   <motion.div
    //     initial={{ y: 50 }}
    //     whileInView={{ y: 0 }}
    //     transition={{ duration: 0.5, type: "spring" }}
    //   >
    //     <h3>Hello</h3>
    //     <p>
    //       Wrong with self-improvement & how we're fixing it. Self-improvement.
    //       Ugh.
    //     </p>
    //     <p>
    //       Wrong with self-improvement & how we're fixing it. Self-improvement.
    //       Ugh.
    //     </p>
    //   </motion.div>
    // </li>
  );
};
