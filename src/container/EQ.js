"use client";
import EQCard from "@/components/EQCard";
import { motion } from "framer-motion";

const EQ = () => {
  const data = [
    {
      emoji: "😊",
      title: "You attend a class reunion",
      description:
        "You compare yourself with your peers achievements, instead of making your self-judgement more independent of others.",
      color: "blue",
    },
    {
      emoji: "😳",
      title: "You get a promotion at work",
      description:
        "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself $ your abilities.",
      color: "indigo",
    },
    {
      emoji: "😠",
      title: "You argue with a colleague",
      description:
        "You get angry and defensive, Instead of staying open and working towards common ground.",
      color: "violet",
    },
    {
      emoji: "😒",
      title: "You are at a lively dinner party",
      description:
        "You play on your phone, instead of confidently approaching strangers and string up a chat.",
      color: "orange",
    },
    {
      emoji: "😬",
      title: "You hit dead end in a negotiation",
      description:
        "You get nervous, frazzled, and frustrated instead of staying optimistic and solution-oriented.",
      color: "yellow",
    },
  ];

  return (
    <div className="rounded-3xl px-8 py-10 text-black gap-2 flex flex-col justify-between h-[650px]">
      <div className="flex flex-row w-full justify-between gap-4">
        <div className="w-[30%] p-5">
          <p className="text-3xl font-bold">EQ beats IQ</p>
        </div>
        <div className="w-[30%] p-5 text-base">
          <p>
            People with high emotional intelligence(EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className="w-[30%] p-5 text-base">
          <p>
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </p>
        </div>
      </div>

      {/* mid */}
      <div className="flex items-center gap-6">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold"
        >
          Does this sound familiar...
        </motion.div>
        <motion.img
          whileInView={{ x: [400, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="w-12 h-12"
          src="https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469741-inky.png"
        />
      </div>

      <div className="flex justify-between overflow-x-scroll overflow-y-hidden gap-4 min-h-[250px] h-[250px] w-full">
        {/* Cards */}

        {data.map((item, i) => (
          <EQCard
            key={i}
            emoji={item.emoji}
            title={item.title}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default EQ;
