import { motion } from "framer-motion";
import Image from "next/image";

export default function Image2({ src }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -50 }} // Initial position and scale
      animate={{ opacity: 1, scale: 1, y: 0 }} // Animation properties when component mounts
      transition={{ type: "spring", stiffness: 150, damping: 20 }} // Spring animation transition
      whileHover={{ scale: 1.1 }} // Scale up when hovering
    >
      <div>
        <Image
          alt="Your image description"
          src={src}
          width={500}
          height={500}
        />
      </div>
    </motion.div>
  );
}
