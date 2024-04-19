import { motion } from "framer-motion";
import Image from "next/image";

export default function Image3({ src }) {
  return (
    <motion.div
      whileTap={{ rotate: 360 }} // Rotate 360 degrees when tapped
      style={{ width: 500, height: 500, cursor: "pointer" }} // Set the width, height, and cursor
    >
      <Image alt="Your image description" src={src} width={500} height={500} />
    </motion.div>
  );
}
