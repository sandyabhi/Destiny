import { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion } from "framer-motion";

const TimeLineCard = ({ title, description }) => {
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
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-md">{description}</p>
      </motion.div>
    </li>
  );
};

export default TimeLineCard;
