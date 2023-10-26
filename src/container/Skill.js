"use client";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="rounded-3xl px-8 py-8 gap-2 flex flex-col justify-between items-center bg-sky-50 text-black w-full h-[650px]">
      {/* Header */}
      <div className="text-center">
        <p className="text-lg font-semibold">
          Let your friends, family, and co-workers(anonymously) rate your skills
        </p>
        <h1 className="font-bold text-4xl pt-4">
          Ever wondered what others think of you?
        </h1>
      </div>

      {/* Steps */}
      <div className="w-full">
        <div className="relative flex flex-col justify-center items-center h-full">
          <div className="w-[80%] border-2 border-yellow-400 border-dashed" />

          <div className="w-[85%] absolute flex flex-row justify-between items-center text-black">
            <div className="relative">
              <motion.img
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="w-20 h-20 bg-yellow-500 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/021/664/704/small/gold-star-shotting-gold-star-transparent-gold-bokeh-stars-free-free-png.png"
              />
              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="absolute -left-20 pt-4 w-64 h-8 text-sm text-center"
              >
                Answer questions on your social skills
              </motion.div>
            </div>

            <div className="relative">
              <motion.img
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="w-20 h-20 bg-yellow-500 rounded-full "
                src="https://static.vecteezy.com/system/resources/thumbnails/021/664/704/small/gold-star-shotting-gold-star-transparent-gold-bokeh-stars-free-free-png.png"
              />
              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="absolute -left-20 pt-4 w-64 h-8 text-sm"
              >
                Let others anonymously answer the same questions about you
              </motion.div>
            </div>

            <div className="relative">
              <motion.img
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="w-20 h-20 bg-yellow-500 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/021/664/704/small/gold-star-shotting-gold-star-transparent-gold-bokeh-stars-free-free-png.png"
              />
              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="absolute -left-20 pt-4 w-64 h-8 text-sm text-center"
              >
                Find out where you and others see things the same way - and
                where not!
              </motion.div>
            </div>
          </div>
          {/* <div className="-bottom-10 absolute w-[90%] -top-10 flex flex-row justify-between items-center text-white">
            <div className="relative">
              <motion.img
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="left-0 top-0 absolute w-20 h-20 bg-yellow-500 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/021/664/704/small/gold-star-shotting-gold-star-transparent-gold-bokeh-stars-free-free-png.png"
              />
              <div>Answer questions on your social skills</div>
            </div>

            <div className="relative">
              <p className="left-0 top-10 absolute w-36 py-2 px-4 rounded-xl bg-sky-300">
                Anonymous 1
              </p>
              <p className="w-6 h-6 bg-sky-300 rounded-full" />
            </div>

            <div className="relative">
              <p className="-left-15 -top-14 absolute w-36 py-2 px-4 rounded-xl bg-orange-300">
                Anonymous 2
              </p>
              <p className="w-6 h-6 bg-orange-300 rounded-full" />
            </div>

            <div className="relative">
              <p className="left-0 top-10 absolute w-36 py-2 px-4 rounded-xl bg-green-400">
                Anonymous 3
              </p>
              <p className="w-6 h-6 bg-green-400 rounded-full" />
            </div>
          </div> */}

          {/* <div className="w-[80%]  border-2 border-yellow-400 border-dashed" /> */}
        </div>
      </div>
      {/* <div className="flex items-center w-full">
        <div className="relative w-full flex justify-center">
          <div className="border-2 border-yellow-400 border-dashed w-[90%]" />
          <div className="w-[95%] absolute -top-10 flex flex-row justify-between items-center">
           
            <div className="relative">
              <motion.img
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="left-0 top-0 absolute w-20 h-20 bg-yellow-500 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/021/664/704/small/gold-star-shotting-gold-star-transparent-gold-bokeh-stars-free-free-png.png"
              />
              <div>Answer questions on your social skills</div>
            </div>
            <div>
              <motion.img
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="left-0 top-0 absolute w-20 h-20 bg-yellow-500 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/021/664/704/small/gold-star-shotting-gold-star-transparent-gold-bokeh-stars-free-free-png.png"
              />
              <div>
                Let others anonymously answer the same questions about you
              </div>
            </div>
            <div>
              <motion.img
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="left-0 top-0 absolute w-20 h-20 bg-yellow-500 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/021/664/704/small/gold-star-shotting-gold-star-transparent-gold-bokeh-stars-free-free-png.png"
              />
              <div>
                Find out where you and others see things the same way - and
                where not!
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Card */}
      <div className="w-[80%] border-2 border-blue-100 h-52 shadow-md rounded-2xl">
        <div className="relative flex flex-col justify-center items-center h-full">
          <div className="w-[90%] border-[1px] border-slate-400" />
          <div className="-bottom-10 absolute w-[90%] -top-10 flex flex-row justify-between items-center text-white">
            <div className="relative">
              <motion.div
                whileInView={{ x: [100, 0], scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="-left-10 -top-14 absolute py-2 px-4 rounded-xl bg-indigo-600"
              >
                You
              </motion.div>
              <p className="w-6 h-6 bg-indigo-600 rounded-full" />
            </div>

            <div className="relative">
              <motion.div
                whileInView={{ x: [100, 0], scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="left-0 top-10 absolute w-36 py-2 px-4 rounded-xl bg-sky-300"
              >
                Anonymous 1
              </motion.div>
              <p className="w-6 h-6 bg-sky-300 rounded-full" />
            </div>

            <div className="relative">
              <motion.div
                whileInView={{ x: [100, 0], scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="-left-15 -top-14 absolute w-36 py-2 px-4 rounded-xl bg-orange-300"
              >
                Anonymous 2
              </motion.div>
              <p className="w-6 h-6 bg-orange-300 rounded-full" />
            </div>

            <div className="relative">
              <motion.div
                whileInView={{ x: [100, 0], scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="left-0 top-10 absolute w-36 py-2 px-4 rounded-xl bg-green-400"
              >
                Anonymous 3
              </motion.div>
              <p className="w-6 h-6 bg-green-400 rounded-full" />
            </div>
          </div>

          {/* <div className="w-[80%]  border-2 border-yellow-400 border-dashed" /> */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
