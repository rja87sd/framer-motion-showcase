"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Image1({src}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div>
        <Image
          alt="moon in front of the sun"
          src={src}
          width="500"
          height="500"
        />
      </div>
    </motion.div>
  );
}

