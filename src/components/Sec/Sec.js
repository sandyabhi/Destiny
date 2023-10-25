"use client";
import { motion } from "framer-motion";

const Sec = () => {
  const data = [
    {
      emoji: "😊",
      title: "You attend a class reunion",
      description:
        "You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others.",
    },
    {
      emoji: "😒",
      title: "You attend a class reunion",
      description:
        "You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others.",
    },
    {
      emoji: "😮",
      title: "You attend a class reunion",
      description:
        "You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others.",
    },
    {
      emoji: "😍",
      title: "You attend a class reunion",
      description:
        "You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others.",
    },
  ];

  return (
    <div className="rounded-3xl bg-slate-100 px-8 py-10 text-black gap-2 flex flex-col justify-between h-[650px]">
      <div className="flex flex-row w-full justify-between gap-4">
        <div className="w-[30%] p-5">
          <p className="text-xl">EQ beats IQ</p>
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

      <div className="flex gap-2 justify-between overflow-x-scroll w-full">
        {/* Cards */}

        {data.map((item, i) => (
          <>
            <div className="bg-violet-200 px-8 py-6 w-[350px] rounded-3xl">
              <div className="pb-4">{item.emoji}</div>
              <div>
                <p className="text-base font-bold">{item.title}</p>
                <p className="text-base">{item.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Sec;
